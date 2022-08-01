import './App.scss';
import { Routes, Route, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Tabs } from './components/Tabs';
import { TabContent } from './components/TabContent';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <nav className="navbar-menu">
      <NavLink
        className={(navData) => classNames('navbar-item', {
          'is-active': navData.isActive,
        })}
        to="/"
      >
        Home page
      </NavLink>
      <NavLink
        className={(navData) => classNames('navbar-item', {
          'is-active': navData.isActive,
        })}
        to="/tabs"
      >
        Tabs page
      </NavLink>
    </nav>

    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/tabs" element={<Tabs tabs={tabs} />}>
        <Route index element={<TabContent tabs={tabs} />} />
        <Route path=":tabId" element={<TabContent tabs={tabs} />} />
      </Route>

    </Routes>
  </div>
);

export default App;
