import { createRoot } from 'react-dom/client';
// import { HashRouter } from 'react-router-dom';

import { Root } from './Root';

const container = document.getElementById('root') as HTMLElement;

createRoot(container)
  .render(
    <Root />,
  );
