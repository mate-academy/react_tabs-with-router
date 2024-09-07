import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Routes, Route, useLocation } from 'react-router-dom';

const Tab1Content = () => (
  <div className="block" data-cy="TabContent">
    Some text in tab 1
  </div>
);

const Tab2Content = () => (
  <div className="block" data-cy="TabContent">
    Some text in tab 2
  </div>
);

const Tab3Content = () => (
  <div className="block" data-cy="TabContent">
    Some text in tab 3
  </div>
);

const TabsPage = () => {
  const location = useLocation();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          <li
            className={location.pathname === '/tabs/tab-1' ? 'is-active' : ''}
          >
            <Link to="tab-1">Tab 1</Link>
          </li>
          <li
            className={location.pathname === '/tabs/tab-2' ? 'is-active' : ''}
          >
            <Link to="tab-2">Tab 2</Link>
          </li>
          <li
            className={location.pathname === '/tabs/tab-3' ? 'is-active' : ''}
          >
            <Link to="tab-3">Tab 3</Link>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <Routes>
          <Route path="tab-1" element={<Tab1Content />} />
          <Route path="tab-2" element={<Tab2Content />} />
          <Route path="tab-3" element={<Tab3Content />} />
          <Route path="/" element={<p>Please select a tab</p>} />
        </Routes>
      </div>
    </>
  );
};

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/tabs" className="navbar-item">
            Tabs
          </Link>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="/tabs/*" element={<TabsPage />} />
        </Routes>
      </div>
    </div>
  </>
);
