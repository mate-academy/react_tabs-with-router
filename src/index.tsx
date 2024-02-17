import { createRoot } from 'react-dom/client';
import { Root } from './Root';
// import { HashRouter } from 'react-router-dom';
// import { App } from './App';

createRoot(document.getElementById('root') as HTMLElement)
  .render(
    (<Root />),
  );
// <HashRouter>
//   <App />
// </HashRouter>,
