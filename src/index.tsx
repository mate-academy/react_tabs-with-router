import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { tabs } from './data';
import { TabsContext } from './context';

createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <HashRouter>
      <TabsContext.Provider value={tabs}>
        <App />
      </TabsContext.Provider>
    </HashRouter>
  </>,
);
