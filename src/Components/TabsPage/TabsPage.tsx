import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = (props) => {
  const { tabs } = props;
  const params = useParams();
  const activeTab = tabs.find(tab => tab.id === params.tabId) || [];

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="tab"
              className={classNames({ 'is-active': params.tabId === tab.id })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {'content' in activeTab
          ? activeTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
