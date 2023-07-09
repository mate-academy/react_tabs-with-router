import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Link,
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from 'react-router-dom';
import { Tabs } from './components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabPage = () => {
  const { tabId = '' } = useParams();

  return (
    <Tabs
      tabs={tabs}
      selectedTabId={tabId}
    />
  );
};

export const App = () => {
  const location = useLocation();

  return (
    <>
      <nav
        className="navbar
        is-light
        is-fixed-top
        is-mobile
        has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className={`navbar-item ${location.pathname === '/' ? 'is-active' : ''}`}>Home</Link>
            <Link to="/tabs" className={`navbar-item ${location.pathname.includes('/tabs') ? 'is-active' : ''}`}>Tabs</Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabPage />} />
            <Route path=":tabId" element={<TabPage />} />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
