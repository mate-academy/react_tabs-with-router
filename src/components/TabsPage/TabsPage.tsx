/* eslint-disable react/require-default-props */
import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { tabs } from '../../TabsData';
import './TabsPage.scss';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const selecteTab = tabs.find(tab => tab.id === tabId);
  const navigate = useNavigate();

  return (
    <div className="TabsPage">
      {!selecteTab && (
        <h1>
          Please select a Tab
        </h1>
      )}

      <ul className="TabsPage__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="TabsPage__item"
            onClick={() => {
              navigate(`/tabs/${tab.id}`);
            }}
            aria-hidden="true"
          >
            <h2>
              {tab.title}
            </h2>
          </li>
        ))}
      </ul>

      <div className="TabsPage__content">
        {selecteTab && (
          <p>
            {selecteTab.content}
          </p>
        )}
      </div>
    </div>
  );
};
