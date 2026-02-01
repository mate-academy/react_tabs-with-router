import { Routes, Route, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import PageContent from './components/PageContent';
import HomePage from './components/HomaPage';
import { TabsPage } from './components/TabsPage';
import TabItem from './components/TabContent';

export const App = () => (
  <>
    <Routes>
      <Route path="/" element={<PageContent />}>
        <Route index element={<HomePage />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route
            index
            element={<p data-cy="TabContent">Please select a tab</p>}
          />
          <Route path=":tabId" element={<TabItem />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>

      <Route path="home" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);
