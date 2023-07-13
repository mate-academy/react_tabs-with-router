import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <RouterProvider router={App} />,
);
