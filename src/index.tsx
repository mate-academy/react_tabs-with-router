import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs';
import { Home } from './components/Home';
import { Error } from './components/Error';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/tabs',
        element: <Tabs tabs={tabs} />,
        children: [
          {
            path: ':tabId',
            element: <Tabs tabs={tabs} />,
          },
        ],
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
);
