/* eslint-disable @typescript-eslint/no-explicit-any */
import { defer, type MetaFunction } from '@remix-run/node';
import { Await, useLoaderData } from '@remix-run/react';
import { Suspense, useState } from 'react';

import Posts from '../components/posts';
import Users from '../components/users';
import { sleep } from '../utils';

export const meta: MetaFunction = () => {
  return [{ title: 'Posts List' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    sleep(2000).then(() => res.json()),
  );

  const usersResponse = fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    sleep(2000).then(() => res.json()),
  );

  return defer({ posts: postsResponse, users: usersResponse });
};

export default function Index() {
  const { users, posts } = useLoaderData<typeof loader>();

  const [lightMode, setLightMode] = useState(false);

  return (
    <>
      <div>
        <p>Light Mode: {lightMode ? 'On' : 'Off'}</p>
        <button onClick={() => setLightMode(!lightMode)}>Toggle Light Mode</button>
      </div>
      <div className='flex'>
        <Suspense fallback={<div>Loading posts...</div>}>
          <Await resolve={posts}>{(posts) => <Posts posts={posts} />}</Await>
        </Suspense>
        <Suspense fallback={<div>Loading users...</div>}>
          <Await resolve={users}>{(users) => <Users users={users} />}</Await>
        </Suspense>
      </div>
    </>
  );
}
