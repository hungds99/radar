/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { Await, useLoaderData } from '@remix-run/react';
import { Suspense } from 'react';
import { defer } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader: LoaderFunction = () => {
  const response = fetch('https://jsonplaceholder.typicode.com/users');
  const users = response.then((res) => res.json());
  return defer({ users });
};

export default function Index() {
  const { users } = useLoaderData<any>();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to Remix</h1>
      <p>Load users data</p>
      <Suspense fallback={<Loading />}>
        <Await resolve={users}>
          {(users) => (
            <ul>
              {users.map((user: any) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

function Loading() {
  return <div>Loading...</div>;
}
