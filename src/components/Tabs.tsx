import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  tabs: Tab[];
  activeTabId: string;

}
export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => (
  <div className="container">
    <h2>Tabs</h2>
    <div className="tabsTable">
      {tabs.map(tab => (
        <Link
          to={`/tabs/${tab.id}`}
          key={tab.id}
          id={tab.id}
          className={activeTabId === tab.id ? 'link_active' : 'link'}
        >
          {tab.title}
        </Link>
      ))}
    </div>
    <div className="tab">
      {tabs.find(tab => tab.id === activeTabId)?.content}
    </div>
  </div>

);
