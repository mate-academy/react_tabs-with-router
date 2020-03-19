import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../types';

interface Props {
  tabs: Tab[];
  activeTab: string;
}

export const Tabs: FC<Props> = ({ tabs, activeTab }) => (
  <>
    <div>
      {tabs.map(tab => (
        <Link
          to={`/tabs/${tab.id}`}
          key={tab.id}
          className="link"
        >
          {tab.title}
        </Link>
      ))}
    </div>
    <p>{tabs.find(tab => tab.id === activeTab)?.content}</p>
  </>
);
