import './App.scss';
import 'bulma';
import {
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import classNames from 'classnames';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  const isLinkActive = (status: Status): string | undefined => {
    return classNames('navbar-item', {
      'is-active': status.isActive,
    });
  };

  return (
    <div className="App">
      <header className="container">
        <nav className="navbar">
          <NavLink className={isLinkActive} to="/">Home page</NavLink>
          <NavLink className={isLinkActive} to="/tabs">Tabs</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/tabs">
          <Route index element={<TabsPage tabs={tabs} />} />

          <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
