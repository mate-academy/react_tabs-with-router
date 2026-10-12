import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { GlobalProvider } from './store/GlobalProvider';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { PageNotFound } from './pages/PageNotFound';
import { TabContent } from './components/TabContent/TabContent';

export const Root = () => {
  return (
    <HashRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="tabs" element={<TabsPage />}>
              <Route path=":tabId?" element={<TabContent />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="home" element={<Navigate to={'/'} replace />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </HashRouter>
  );
};
