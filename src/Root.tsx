import { Navigate, HashRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { App } from './App';

const returnStartPage = () => <Navigate to="/" replace={true} />;
const pageNotFound = () => <h1 className="title">Page not found</h1>;

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="home" element={returnStartPage()} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route path="*" element={pageNotFound()} />
      </Route>
    </Routes>
  </Router>
);
