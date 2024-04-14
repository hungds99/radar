/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';

import { lazyRouter } from './lazy-router.tsx';
// import { router } from './router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={lazyRouter} />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
);
