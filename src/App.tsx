import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  NavLink, Navigate, Route, Routes,
} from 'react-router-dom';
import { Tabs } from './Components/Tabs';
import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  return (
    <>
      <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
        <div className="navbar-menu">
          <div className="navbar-start has-navbar-fixed-top">
            <NavLink to="/" className="navbar-item isActive">Home</NavLink>
            <NavLink to="/tabs" className="navbar-item isActive">Tabs</NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={(
            <h1 className="title notification is-large is-success">
              Home Page
            </h1>
          )}
        />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route
          path="*"
          element={
            <h1 className="title notification is-danger is-light">
              Page not found
            </h1>}
        />

        <Route path="/tabs">
          <Route index element={<Tabs tabs={tabs} />} />
          <Route path=":tabId" element={<Tabs tabs={tabs} />} />
        </Route>
      </Routes>

    </>
  );
};

export default App;
