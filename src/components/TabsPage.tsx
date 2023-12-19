import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { tabs } from '../constants/tabs';
import { Tab } from '../types/Tab';

export const TabsPage = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  const { tabId } = useParams();

  useEffect(() => {
    if (!tabId) {
      setSelectedTab(null);
    }

    const currentTab = tabs.find(tab => tab.id === tabId);

    if (currentTab) {
      setSelectedTab(currentTab);
    }
  }, [tabId]);

  return (
    <>
      <h1 className="title">
        Tabs page
      </h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                className={
                  selectedTab?.id === id ? 'is-active' : ''
                }
                data-cy="Tab"
                key={id}
              >
                <Link
                  to={`/tabs/${id}`}
                  data-cy="TabLink"
                  onClick={() => setSelectedTab(tab)}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
