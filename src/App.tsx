import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import { Tabs } from './components/Tabs/Tabs';
import { Home } from './components/Home/Home';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

type ActiveLink = (status: { isActive: boolean }) => string;

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const linkStatus: ActiveLink = ({ isActive }) => (
    isActive ? 'navbar-item is-active' : 'navbar-item');

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
        <div className="navbar-menu">
          <div className="navbar-start">
            <NavLink to="/" className={linkStatus}>Home page</NavLink>
            <NavLink to="/tabs" className={linkStatus}>Tabs page</NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/tabs" element={<Tabs tabs={tabs} />}>
          <Route index element={<Tabs tabs={tabs} />} />
          <Route path=":tabId" element={<Tabs tabs={tabs} />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
