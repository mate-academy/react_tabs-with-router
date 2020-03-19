import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Tabs.scss';

interface Props {
  tabs: Tab[];
  currentTabId: string;
}

export const Tabs: FC<Props> = ({ tabs, currentTabId }) => (
  <>
    <div className="tab-container">
      {tabs.map(tab => (
        <Link to={`/tabs/${tab.id}`} key={tab.id} className="tab">{tab.title}</Link>
      ))}
    </div>
    <p>{tabs.find(tab => tab.id === currentTabId)?.content}</p>
  </>
);
