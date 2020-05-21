import React from 'react';
import { Link } from 'react-router-dom';

type TabsProps = {
  tabs: Tab[];
  activeTabId: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTabId }) => (
  <div className="container">
    <h2>Tabs</h2>
    <div className="tabs-field">
      <div className="links">
        {tabs.map(tab =>
          (
            <Link to={`/tabs/${tab.id}`}
              key={tab.id}
              id={tab.id}
              className={activeTabId === tab.id ? "link active" : "link"}
            >
                {tab.title}
            </Link>
          ))
        }
      </div>
      <div className="tabs">

        <div className="tab">
          {tabs.find(tab => tab.id === activeTabId)?.content}
          </div>

      </div>
    </div>
  </div>
);


