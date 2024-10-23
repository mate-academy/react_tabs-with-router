import { useState, useEffect } from 'react';
import { tabs } from '../constants/tabs';
import { Link, useParams } from 'react-router-dom';

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  const [content, setContent] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (selectedTab) {
      setContent(selectedTab.content);
    } else {
      setContent(undefined);
    }
  }, [selectedTab]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={selectedTab?.id === tab.id ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content ? content : 'Please select a tab'}
      </div>
    </>
  );
};
