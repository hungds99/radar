import { Suspense } from 'react';
import Loading from './loading';

async function getPost(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
}

export default async function Post({ params }: any) {
  const id = params.id;
  const post = await getPost(id);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <h2>NextJS - Server Side Rendering</h2>
        <br />
        <h4>Title: {post.title}</h4>
        <p>Body: {post.body}</p>
      </Suspense>
    </>
  );
}
