import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import Home from './routes/home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Example1 from './routes/example1.jsx';
import Example2 from './routes/example2.jsx';
import Example3 from './routes/example3.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/example1',
    element: <Example1 />,
  },
  {
    path: '/example2',
    element: <Example2 />,
  },
  {
    path: '/example3',
    element: <Example3 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
