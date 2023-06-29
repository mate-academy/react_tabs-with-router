import { Outlet } from 'react-router-dom';
import { NaviLink } from './components/NaviLink/NaviLink';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NaviLink to="/" text="Home" />
          <NaviLink to="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Outlet context={tabs} />
      </div>
    </div>
  </>
);
