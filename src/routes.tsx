import { RouteObject } from 'react-router-dom';
import HomePage from './pages/home';
import RootLayout from './pages/layout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/auth',
        element: <HomePage />,
      },
      {
        path: '/auth/register',
        element: <HomePage />,
      },
    ],
  },
];
