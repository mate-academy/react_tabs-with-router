import React from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[],
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn(
                { 'is-active': tab.id === tabId },
              )}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? (
          activeTab.content
        ) : (
          'Please select a tab'
        )}
      </div>
    </>
  );
};
