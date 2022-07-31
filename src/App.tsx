import {
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import 'bulma';
import { TabsPage } from './Components/TabsPage';

const App = () => (
  <div className="App">
    <header className="is-flex mb-4">
      <NavLink to="/" className="navbar-item is-tab">Home</NavLink>
      <NavLink to="/tabs" className="navbar-item is-tab">Tabs</NavLink>
    </header>
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <h1 className="title has-text-centered">Home page</h1>
          }
        />
        <Route path="tabs/*" element={<TabsPage />} />
        <Route
          path="*"
          element={
            <h1 className="title has-text-centered">Page is not found</h1>
          }
        />
      </Routes>
    </main>
  </div>
);

export default App;
