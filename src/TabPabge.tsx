import { useState } from 'react';
import { Link } from 'react-router-dom';
import { tabs } from './App';

export const TabPage = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => {
              return (
                <li
                  key={tab.id}
                  data-cy="Tab"
                  className={selectedTab.id === tab.id ? 'is-active' : ''}
                  onClick={() => setSelectedTab(tab)}
                >
                  <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {tabs.map((tab) => {
          <div className="block" data-cy="TabContent">
            {selectedTab.id === tab.id
              ? 'Please select a tab'
              : selectedTab.content}
          </div>;
        })}
      </div>
    </div>
  );
};
