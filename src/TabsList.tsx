import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from './types/Tab';

interface Props {
  tabs: Tab[],
}

export const TabsList: React.FC <Props> = (props) => {
  const { tabs } = props;
  const { tabId } = useParams();
  const [tabContent, setTabContent] = useState('');
  const currentTab = tabs.find(tab => tab.id === tabId) || '';

  useEffect(() => {
    if (currentTab !== '') {
      (setTabContent(currentTab?.content));
    }
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="tab"
              key={tab.id}
              className={cn({ 'is-active': tabId === tab.id })}
            >
              <Link
                to={`../${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>

      </div>

      <div className="block" data-cy="tab-content">
        {
          tabContent || 'Please select a tab'
        }
      </div>
    </>

  );
};
