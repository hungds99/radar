/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState<any>({});

  const fetchPosts = useCallback(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    setPost(data);
  }, [id]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      <h3>Render Post with id: {id} in client...</h3>
      <h4>Title: {post.title}</h4>
      <p>Body: {post.body}</p>
    </>
  );
};

export default Post;
