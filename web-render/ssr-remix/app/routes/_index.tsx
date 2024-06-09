/* eslint-disable @typescript-eslint/no-explicit-any */
import { type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';

import Posts from '../components/posts';
import Users from '../components/users';
import { sleep } from '../utils';

export const meta: MetaFunction = () => {
  return [{ title: 'Posts List' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader = async () => {
  const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    sleep(2000).then(() => res.json()),
  );

  const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    sleep(2000).then(() => res.json()),
  );

  return { posts: postsResponse, users: usersResponse };
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
        <Posts posts={posts} />
        <Users users={users} />
      </div>
    </>
  );
}
