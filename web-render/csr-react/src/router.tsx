import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Post from './Post.tsx';
import Posts from './Posts.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Posts />,
        index: true,
      },
      {
        path: '/posts/:id',
        element: <Post />,
      },
    ],
  },
]);
