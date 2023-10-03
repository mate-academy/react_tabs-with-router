import {
  NavLink, Routes, Route, useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Tab } from '../types/Tab';
import { TabContent } from './TabContent';

type TabsProps = {
  tabs: Tab[];
};

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setActiveTab(location.pathname.split('/').pop() || '');
  }, [location]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={tab.id === activeTab ? 'is-active' : ''}
            >
              <NavLink to={tab.id} className="navbar-item">
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <Routes>
        <Route
          index
          element={(
            <div className="block" data-cy="TabContent">
              Please select a tab
            </div>
          )}
        />
        <Route path=":id" element={<TabContent tabs={tabs} />} />

      </Routes>

    </>
  );
};
