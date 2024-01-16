import 'bulma/css/bulma.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { Tab1 } from './components/Tabs/Tabs/Tab1';
import { Tab2 } from './components/Tabs/Tabs/Tab2';
import { Tab3 } from './components/Tabs/Tabs/Tab3';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames(
  'navbar-item', {
    'is-active': isActive,
  },
);

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
          <NavLink to="/tabs" className={getLinkClass}>Tabs</NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/tabs" element={<Tabs />}>
            <Route path="/tabs/tab1" element={<Tab1 />} />
            <Route path="/tabs/tab2" element={<Tab2 />} />
            <Route path="/tabs/tab3" element={<Tab3 />} />
            <Route path="/tabs" element={<h1>Please select NavLink tab</h1>} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </>
);
