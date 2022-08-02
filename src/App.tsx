import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Link, Navigate, Route, Routes,
} from 'react-router-dom';
import { Home } from './Home';
import { TabsPage } from './TabsPage';

const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item isActive">Home</Link>
          <Link to="/tabs" className="navbar-item isActive">Tabs</Link>
        </div>
      </div>
    </nav>

    <div className="section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/home"
          element={<Navigate to="/" />}
        />
        <Route path="/tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </div>
  </>
);

export default App;
