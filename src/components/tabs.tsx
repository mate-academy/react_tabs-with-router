import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  setTabId: (newValue: string) => void,
}

export const Tabs:React.FC<Props> = ({
  tabs,
  selectedTabId,
  setTabId,
}) => {
  const selecetedContent = tabs.find(tab => tab.id === selectedTabId);

  const newContent = selecetedContent?.content;

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={selectedTabId === tab.id ? 'is-active' : ''}
              >
                <NavLink
                  to={`/tabs/${tab.id}`}
                  onClick={() => setTabId(tab.id)}
                >
                  {tab.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {newContent || 'Please select a tab'}
      </div>
    </div>
  );
};
