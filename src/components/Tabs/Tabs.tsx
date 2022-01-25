import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {
  tabId: string | undefined;
};

export const Tabs: React.FC<Props> = ({ tabId }) => {
  const [tabsState, setTabs] = useState<Tab[]>([]);

  useEffect(() => {
    setTabs(tabs);
  }, []);

  const contentTab = tabsState.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed is-centered">
        <ul>
          {tabsState.map((tab) => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <NavLink
                to={`/tabs/${tab.id}`}
              >
                <span>{tab.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="content is-medium">
        {contentTab ? contentTab.content : <p>Please, Select Tab</p>}
      </div>
    </>
  );
};
