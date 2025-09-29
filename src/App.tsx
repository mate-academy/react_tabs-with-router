import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
  useLocation,
} from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Home = () => (
  <section className="section">
    <div className="container">
      <h1 className="title">Home page</h1>
    </div>
  </section>
);

const Tabs = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={tabId === tab.id ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {!selectedTab ? (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        ) : (
          <div className="block" data-cy="TabContent">
            {selectedTab.content}
          </div>
        )}
      </div>
    </div>
  );
};

const Error = () => (
  <div>
    <h1 className="title">Page not found</h1>
  </div>
);

export const App = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <div
              className={`navbar-item ${pathname === '/' ? 'is-active' : ''}`}
            >
              <Link to="/">Home</Link>
            </div>
            <div
              className={`navbar-item ${pathname.startsWith('/tabs') ? 'is-active' : ''}`}
            >
              <Link to="/tabs">Tabs</Link>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Home />} />
          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};
