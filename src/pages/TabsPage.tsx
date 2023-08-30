import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

export const TabsPage = ({ tabs }: { tabs: Tab[] }) => {
  const params = useParams();
  const [selectedTab, setSelectedTab] = useState<Tab | undefined>(
    tabs.find(tab => tab.id === params.tabId),
  );

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={tab.id === selectedTab?.id ? 'is-active' : ''}
            >
              <Link
                to={`/tabs/${tab.id}`}
                onClick={() => {
                  setSelectedTab(tab);
                }}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
