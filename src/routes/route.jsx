import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../components/Layout/HomeLayout';

const route = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: '/auth',
    element: <h2>Authentication</h2>,
  },
  {
    path: '/news',
    element: <h2>news Layout</h2>,
  },
  {
    path: '/*',
    element: <h2>Error404</h2>,
  },
]);
export default route;
