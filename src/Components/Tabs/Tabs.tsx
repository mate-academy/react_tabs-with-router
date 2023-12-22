import { useState } from 'react';
import cn from 'classnames';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabContent } from '../Tab.tsx/TabContent';

interface Props {
  tabs: Tab[],
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const [selectedId, setSelectedId] = useState('');
  const isActiveTab = (tabId: string): boolean => selectedId === tabId;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': isActiveTab(tab.id) })}
              key={tab.id}
            >
              <NavLink
                to={`/tabs/${tab.id}`}
                className={({ isActive }) => {
                  if (isActive) {
                    setSelectedId(tab.id);
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
          <Route path="" element={<div>Please select a tab</div>} />
        </Routes>
      </div>
    </>
  );
};
