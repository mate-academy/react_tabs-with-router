import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

interface Tab {
  id: string,
  title: string,
  content: string,
}

interface Props {
  tabs: Tab[];
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { id } = useParams();

  return (
    <>
      <h1 className="selected">
        Selected tab is&nbsp;
        {id}
      </h1>
      <div className="tab">
        <div className="tab_list">
          {tabs.map(tab => (
            <NavLink
              key={tab.id}
              to={`/tabs/${tab.id}`}
              className={({ isActive }) => (
                isActive ? 'active_tab' : 'notActive_tab'
              )}
            >
              {tab.title}
            </NavLink>
          ))}
        </div>
        <div className="tab_content">
          {tabs.find(tab => id === tab.id)?.content || 'Please select a tab'}
        </div>
      </div>
    </>

  );
};
