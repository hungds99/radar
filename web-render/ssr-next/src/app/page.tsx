import Posts from '@/components/posts';
import Users from '@/components/users';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <>
      <div>
        <h2>NextJS - Server Side Rendering</h2>
        <br />
        <div
          style={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <Suspense fallback={<p>Loading posts...</p>}>
            <Posts />
          </Suspense>
          <Suspense fallback={<p>Loading users...</p>}>
            <Users />
          </Suspense>
        </div>
      </div>
    </>
  );
}
