import { createRoot } from 'react-dom/client';
import './App.scss';
import { Root } from './Root';

createRoot(document.getElementById('root') as HTMLElement).render(
  <html className="has-navbar-fixed-top">
    <Root />
  </html>,
);
