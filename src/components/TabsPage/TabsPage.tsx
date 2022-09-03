import { useMemo } from 'react';
import {
  NavLink, useParams,
} from 'react-router-dom';
import { tabs } from '../../api/tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectedTab = useMemo(() => (
    tabs.find(tab => tab.id === tabId)
  ), [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <>
              <li
                key={tab.id}
                className={selectedTab?.id === tab.id ? 'is-active' : ''}
              >
                <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="tab-content">
        {tabId ? (selectedTab?.content) : 'Please select a tab'}
      </div>
    </>
  );
};
