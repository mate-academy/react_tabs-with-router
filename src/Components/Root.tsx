import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';
import { Tab1Content } from './Tab1Content';
import { App } from '../App';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        {/*  /tabs та /tabs/:tabId */}
        <Route path="tabs" element={<TabsPage />}>
          <Route index element={<Tab1Content />} />
          <Route path=":tabId" element={<Tab1Content />} />
        </Route>

        {/* перенаправлення з /home на / */}
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>
);
