import { App } from './App';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
