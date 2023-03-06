import { Outlet, useMatch } from 'react-router-dom';
import { PageNavLink } from './components/PageNavLink/PageNavLink';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const match = useMatch('/tabs/:tabId');
  const matchHome = useMatch('/');

  const selectedTab = tabs.find(tab => tab.id === match?.params.tabId);

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <PageNavLink to="/" text="Home" />
            <PageNavLink to="/tabs" text="Tabs" />
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Outlet />

          {!matchHome && (
            <div className="block" data-cy="TabContent">
              {selectedTab ? `${selectedTab?.content}` : 'Please select a tab'}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
