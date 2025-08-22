import { App } from './App';
import { HashRouter, Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';
import { TabItem } from './TabItem';

export const Root = () => (
  <HashRouter future={{ v7_startTransition: true }}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="tabs" element={<TabsPage />}>
          <Route
            index
            element={
              <div className="block" data-cy="TabContent">
                Please select a tab
              </div>
            }
          />
          <Route path=":tabId" element={<TabItem />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
