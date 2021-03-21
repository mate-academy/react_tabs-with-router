import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from './Tab';
import { tabs } from '../api';
import { Tabs } from '../types';
import '../App.scss';

export const TabsPage: React.FC<Tabs> = () => {
  const [content, setContent] = useState('');
  const { tabId } = useParams();

  useEffect(() => {
    const selectedTab = tabs.find(tab => tab.id === tabId);

    setContent(selectedTab ? selectedTab.content : '');
  }, [tabId]);

  return (
    <div>
      <div className="page_content">
        {!content && (
          <p>
            Please select a tab
          </p>
        )}

      </div>

      <div className="tabs is-medium">
        <ul className="list">
          {tabs.map(tab => (
            <li key={tab.id}>
              <Tab tab={tab} />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="tab_content">
          {content}
        </p>
      </div>

    </div>
  );
};
