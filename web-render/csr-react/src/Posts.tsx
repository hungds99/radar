/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { sleep } from './utils';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    await sleep(10000);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h3>React + Vite - Client Side Rendering</h3>
      <ol>
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <li key={post.id}>
              <a href={`/posts/${post.id}`}>{post.title}</a>
            </li>
          ))
        ) : (
          <p>⌛ Data loading...</p>
        )}
      </ol>
    </>
  );
};

export default Posts;
