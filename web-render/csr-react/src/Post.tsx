/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sleep } from './utils';

const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState<any>({});

  const fetchPosts = useCallback(async () => {
    await sleep(10000);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    setPost(data);
  }, [id]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      <h3>React + Vite - Client Side Rendering</h3>
      <br />
      <h4>Title: {post.title}</h4>
      <p>Body: {post.body}</p>
    </>
  );
};

export default Post;
