import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import './index.css';
import App from './App.jsx';
import Root from './components/Layout/Root.jsx';
import Home from './components/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
        Component: Home,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
