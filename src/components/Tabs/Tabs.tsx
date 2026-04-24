import React from 'react';
import cn from 'classnames';

import { Tab } from '../../types/Tab';
import { Link, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId: activeTabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({
                'is-active': activeTabId === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link to={activeTabId ? `../${tab.id}` : `${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? <>{activeTab.content}</> : <>Please select a tab</>}
      </div>
    </>
  );
};
