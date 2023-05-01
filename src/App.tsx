import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Link, Navigate, NavLink, Route, Routes, useParams,
} from 'react-router-dom';
import { FC } from 'react';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {
  className: string;
  text: string;
  path: string;
};

const PageNavLink: FC<Props> = ({ text, path, className }) => (
  <NavLink
    to={path}
    className={({ isActive }) => classNames(className, {
      'is-active': isActive,
    })}
  >
    {text}
  </NavLink>
);

const TabsPage: FC = () => {
  const { tabsId: currentTabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === currentTabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': currentTabId === tab.id })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <PageNavLink
            path="/"
            text="Home"
            className="navbar-item"
          />

          <PageNavLink
            path="/tabs"
            text="Tabs"
            className="navbar-item"
          />
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabsId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>

      </div>
    </div>
  </>
);
