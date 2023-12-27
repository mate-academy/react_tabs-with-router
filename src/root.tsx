import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';

const error = <h1 className="title">Page not found</h1>;

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to="/" />} />
        <Route index element={<HomePage />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route path="*" element={error} />
      </Route>
    </Routes>
  </Router>
);
