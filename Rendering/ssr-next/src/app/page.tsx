import Posts from '@/components/Posts';
import Users from '@/components/Users';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <>
      <div className='flex'>
        <div>
          <h3>Render List Post in client...</h3>
          <Suspense fallback={<p>Loading posts...</p>}>
            <Posts />
          </Suspense>
        </div>
        <div>
          <h3>Render List User in client...</h3>
          <Suspense fallback={<p>Loading users...</p>}>
            <Users />
          </Suspense>
        </div>
      </div>
    </>
  );
}
