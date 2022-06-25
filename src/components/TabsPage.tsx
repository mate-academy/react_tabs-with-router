import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tabs } from '../api';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const curTab = tabs.find(tab => tab.id === tabId);
  const navigate = useNavigate();

  return (
    <div className="notification">
      <ul className="box navbar-menu">
        {tabs.map(tab => (
          <li
            key={tab.id}
            aria-hidden="true"
            className="button m-1"
            onClick={() => {
              navigate(`/tabs/${tab.id}`);
            }}
          >
            <h2>
              {tab.title}
            </h2>
          </li>
        ))}
      </ul>

      <div className="title">
        {curTab && (
          <p>
            {curTab.content}
          </p>
        )}
      </div>
      {!curTab && (
        <h1 className="title">
          Please, select a tab!!!
        </h1>
      )}
    </div>
  );
};
