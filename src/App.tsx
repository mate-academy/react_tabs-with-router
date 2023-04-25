import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { PageNavLink } from './content/PageNavLink';
import { NavBar } from './content/NavBar';
import { ListTabs } from './content/ListTabs';
import { NotFound } from './content/NotFound';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
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
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="home/" element={<Navigate to="/" replace />} />
          <Route path="tabs/" element={<NavBar tabs={tabs} />}>
            <Route
              index
              element={(
                <div className="block" data-cy="TabContent">
                  Please select a tab
                </div>
              )}
            />
            <Route path=":tab" element={<ListTabs tabs={tabs} />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
