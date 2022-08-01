import './App.scss';
import 'bulma';
import {
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <header className="container">
      <nav className="navbar">
        <NavLink className="navbar-item" to="/">Home page</NavLink>
        <NavLink className="navbar-item" to="/tabs">Tabs</NavLink>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs">
        <Route path="/tabs" element={<TabsPage tabs={tabs} />} />

        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>
    </Routes>
  </div>
);

export default App;
