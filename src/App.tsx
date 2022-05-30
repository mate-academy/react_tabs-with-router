import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import { TabsPage } from './components/TabsPage/TabsPage';
import 'bulma/css/bulma.min.css';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <nav className="header navbar">
      <Link
        className="navbar-item navbar-link"
        to="/"
      >
        Home
      </Link>
      <Link
        className="navbar-item navbar-link"
        to="/tabs"
      >
        Tabs
      </Link>
    </nav>

    <Routes>
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="tabs" element={<TabsPage tabs={tabs} />} />
      <Route path="tabs/:tabId" element={<TabsPage tabs={tabs} />} />

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  </div>
);

export default App;
