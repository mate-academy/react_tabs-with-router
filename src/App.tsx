import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import './App.scss';
import classNames from 'classnames';
import { Home } from './Components/Home/Home';
import { TabsPage } from './Components/TabsPage/TabsPage';
import { WrongAdress } from './Components/WrongAdress/WrongAdress';

/* eslint-disable max-len */
export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames('navbar-item', { 'is-active': isActive });

export const App = () => (
  <>

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
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPage tabs={tabs} />} />
            <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
          </Route>
          <Route path="*" element={<WrongAdress />} />
        </Routes>

        {/* <h1 className="title">Page not found</h1> */}

        {/* <div className="block" data-cy="TabContent">
          Please select a tab
        </div> */}
      </div>
    </div>
  </>
);
