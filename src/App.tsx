import {
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import 'bulma';
import { TabsPage } from './Components/TabsPage';
import { NotFoundPage } from './Components/NotFounPage';
import { HomePage } from './Components/HomePage';

const App = () => (
  <div className="App">
    <header className="is-flex mb-4">
      <NavLink to="/" className="navbar-item is-tab">Home</NavLink>
      <NavLink to="/tabs" className="navbar-item is-tab">Tabs</NavLink>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  </div>
);

export default App;
