import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './Components/HomePage';
import { PageContent } from './Components/PageContent';
import { PageNotFound } from './Components/PageNotFound';
import { TabsProvider } from './Components/TabsContext';

export const Root = () => (
  <BrowserRouter>
    <TabsProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          {/* REDIRECT */}
          <Route path="home" element={<Navigate to="/" replace />} />

          {/* TABS */}
          <Route path="tabs">
            <Route index element={<PageContent />} />
            <Route path=":tabId" element={<PageContent />} />
          </Route>

          {/* NOT FOUND */}
          <Route path="*" element={<PageNotFound />} />
        </Route>{' '}
      </Routes>
    </TabsProvider>
  </BrowserRouter>
);
