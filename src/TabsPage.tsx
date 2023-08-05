import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[];
};
export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames(
                { 'is-active': currentTab?.id === tab.id },
              )}
              key={tab.id}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a Tab'}
      </div>
    </>
  );
};
