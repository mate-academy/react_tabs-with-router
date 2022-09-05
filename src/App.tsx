import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';
import { NavBar } from './components/NavBar/NavBar';
import { TabsPage } from './pages/TabsPage';

export const App = () => (
  <>
    <NavBar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="home"
            element={<Navigate to="/" replace />}
          />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabsId/*" element={<TabsPage />} />
          </Route>

          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </div>
    </div>
  </>
);
