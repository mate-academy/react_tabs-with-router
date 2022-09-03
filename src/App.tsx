import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Navigate, NavLink, Route, Routes,
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage';

const isActiveClass = ({ isActive } : { isActive: boolean }) => {
  return isActive ? 'navbar-item isActive' : 'navbar-item';
};

const App = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={isActiveClass}>Home</NavLink>
            <NavLink to="tabs" className={isActiveClass}>Tabs</NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/tabs" element={<TabsPage />}>
            <Route path=":tabId" />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
