import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PageNavLink } from './components/PageNavLink/PageNavLink';
import { TabsPage } from './Pages/TabsPage';
import { HomePage } from './Pages/HomePage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/home"
          element={<Navigate to="/" replace />}
        />
        <Route path="tabs">
          <Route
            index
            element={(
              <TabsPage
                tabs={tabs}
              />
            )}
          />
          <Route
            path=":tabId"
            element={(
              <TabsPage
                tabs={tabs}
              />
            )}
          />
        </Route>

        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        />
      </Routes>
    </>
  );
};
