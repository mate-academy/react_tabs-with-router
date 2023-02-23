import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { PageNavLink } from './PageNavLink';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabPage } from './pages/TabPage';
import { NotFoundPage } from './pages/NotFoundPage';



export const App: React.FC = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <PageNavLink to="/" text = "Home" />
          <PageNavLink to="/tabs" text ="Tabs" />
        </div>
      </div>
    </nav>
  
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/tabs">
            <Route index element={<TabPage />} />
            <Route path=":tabId" element={<TabPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </>
);
