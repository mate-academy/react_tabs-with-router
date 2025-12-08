import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tabs } from '../data/tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const navigate = useNavigate();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={tabId === tab.id ? 'is-active' : ''}
              >
                <a
                  href={`#/tabs/${tab.id}`}
                  onClick={e => {
                    e.preventDefault();
                    navigate(`/tabs/${tab.id}`);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab ? selectedTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
