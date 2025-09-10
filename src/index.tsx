import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { Root } from './Root';
import React from 'react';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
