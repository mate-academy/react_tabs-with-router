import { createRoot } from 'react-dom/client';
import { MainRoutes } from './router';

createRoot(document.getElementById('root') as HTMLElement).render(
  <MainRoutes />,
);
