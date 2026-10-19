import React from 'react';
import { Tab } from '../../types/Tab';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  activeTab?: string;
};

export const Tabs: React.FC<Props> = ({ tabs, activeTab }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTab);

  // console.log(selectedTab);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === activeTab,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab?.content : 'Please select a tab'}
      </div>
    </>
  );
};
