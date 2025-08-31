import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { TabProvider } from './store/TabContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <TabProvider>
      <App />
    </TabProvider>
  </HashRouter>,
);
