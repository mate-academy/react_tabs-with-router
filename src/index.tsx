import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { TabProvider } from './context/TabContext';
import { Router } from './Router/Router';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <TabProvider>
      <Router />
    </TabProvider>
  </HashRouter>,
);
