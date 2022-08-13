import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { NavLink, Outlet } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
        <div className="navbar-menu">
          <div className="navbar-start">
            <NavLink
              to="/"
              className={({
                isActive,
              }) => 'navbar-item isActive '.concat((isActive
                ? 'is-active' : ''))}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({
                isActive,
              }) => 'navbar-item isActive '.concat((isActive
                ? 'is-active' : ''))}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <Outlet context={tabs} />
      </div>
    </>
  );
};

export default App;
