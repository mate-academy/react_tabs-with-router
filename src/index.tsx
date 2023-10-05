import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
