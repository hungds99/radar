/* eslint-disable @typescript-eslint/no-explicit-any */
import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{ title: 'Post details' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader = async ({ params }: any) => {
  const id = params.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  return json({ post: data });
};

export default function Post() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <>
      <h3>Render Post with id: {post.id} in client...</h3>
      <h4>Title: {post.title}</h4>
      <p>Body: {post.body}</p>
    </>
  );
}
