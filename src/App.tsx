import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import cn from 'classnames';
import { TabsPage } from './pages/Page';
import { TabList } from './components/TabList';

type ClassChangeProps = {
  isActive: boolean;
};

const classChange = ({ isActive }: ClassChangeProps) => cn(
  'navbar-item', {
    'is-active': isActive,
  },
);

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={classChange}>Home</NavLink>
          <NavLink to="/tabs" className={classChange}>Tabs</NavLink>
        </div>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<TabsPage />}>
        <Route index element={<h1 className="title">Home page</h1>} />
        <Route path="tabs" element={<TabList />}>
          <Route path=":tabId?" />
        </Route>
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </>
);
