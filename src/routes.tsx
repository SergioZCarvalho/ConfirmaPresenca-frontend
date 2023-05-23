import { RouteObject } from 'react-router-dom';
import HomePage from './pages/home';
import RootLayout from './pages/layout';
import MyEvent from './pages/myEvents';
import Event from './pages/event';
import CreateEvent from './pages/createEvent';

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
      {
        path: 'create-event',
        element: <CreateEvent />,
      },
      {
        path: 'event',
        element: <Event />,
      },
      {
        path: '/my-events',
        element: <MyEvent />,
      },
    ],
  },
];
