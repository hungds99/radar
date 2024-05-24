/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, Suspense, useEffect, useState } from 'react';

const Comments = lazy(() => import('./components/comments'));

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', { signal });
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <div>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post: any) => (
              <li key={post.id}>
                <p>{post.title}</p>
                <Suspense fallback={<Loading />}>
                  <Comments postId={post.id} />
                </Suspense>
              </li>
            ))}
          </ul>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default App;
