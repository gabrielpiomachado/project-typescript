import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';

import Home from '../pages/Home';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Redirect from '../pages/Redirect';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'posts', element: <Posts /> },
      { path: 'posts/:id', element: <Posts /> },
      { path: 'redirect', element: <Redirect /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);
