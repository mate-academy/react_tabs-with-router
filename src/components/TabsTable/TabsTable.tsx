import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string | undefined;
};

export const TabsTable: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames({ 'is-active': id === selectedTabId })}
            >
              <Link to={`/tabs/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : <p>Please select a tab</p>}
      </div>
    </>
  );
};
