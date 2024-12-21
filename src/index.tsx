import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { TabsProvider } from './store/TabsContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <TabsProvider>
      <App />
    </TabsProvider>
  </HashRouter>,
);
