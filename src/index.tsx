import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './app/App';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './app/styles/global.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
