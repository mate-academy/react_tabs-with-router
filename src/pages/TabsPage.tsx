import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<Tab | null>(null);
  const { tabId } = useParams();

  useEffect(() => {
    const tab = tabs.filter(({ id }) => tabId === id)[0];

    setActiveTab(tab);
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': tabId && tabId === tab.id })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? `${activeTab.content}` : 'Please select a tab'}
      </div>
    </>
  );
};
