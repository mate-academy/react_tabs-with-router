import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { PageNotFound } from './components/PageNotFound';
import { TabContent } from './components/TabContent';

createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route index path="home" element={<HomePage />} />

          <Route path="tabs" element={<TabsPage />}>
            <Route index path=":tabsId" element={<TabContent />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />

        </Route>

      </Routes>
    </HashRouter>,
  );
