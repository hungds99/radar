/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';

const Posts = lazy(() => import('./Posts.tsx'));
const Post = lazy(() => import('./Post.tsx'));

function Loading() {
  return <div>⌛ Suspense loading...</div>;
}

export const lazyRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loading />}>
            <Posts />
          </Suspense>
        ),
        index: true,
      },
      {
        path: '/posts/:id',
        element: (
          <Suspense fallback={<Loading />}>
            <Post />
          </Suspense>
        ),
      },
    ],
  },
]);
