import cn from 'classnames';
import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabContent } from './Tab';

interface Props {
  tabs: Tab[];
}

export const Tabs = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({
                'is-active': tab.id === activeTab,
              })}
              key={tab.id}
            >
              <NavLink
                to={`/tabs/${tab.id}`}
                className={({ isActive }) => {
                  if (isActive) {
                    setActiveTab(tab.id);
                  }

                  return '';
                }}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <Routes>
          <Route path=":tabId" element={<TabContent tabs={tabs} />} />
          <Route path="" element={<>Please select a tab</>} />
        </Routes>
      </div>
    </>
  );
};
