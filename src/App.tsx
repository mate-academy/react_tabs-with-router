import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { Navigation } from './components/nav';
import { TabsPage } from './page/tabpages';
import { PageNotFound } from './page/pagenotfind';
import { HomePage } from './page/homepage';

export const App = () => (
  <>
    <Navigation />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route
            path="tabs"
          >
            <Route
              index
              element={<TabsPage />}
            />
            <Route
              path=":tabId"
              element={<TabsPage />}
            />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
