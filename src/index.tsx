import { createRoot } from 'react-dom/client';
import { GlobalRouter } from './router/AppRouter';

createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalRouter />,
);
