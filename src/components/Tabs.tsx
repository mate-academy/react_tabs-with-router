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
    <div className="tab">
      <ul className="tab_list">
        {tabs.map(tab => (
          <NavLink key={tab.id} to={`/tabs/${tab.id}`}>
            <button
              type="button"
              className={id === tab.id ? 'button_active' : ''}
            >
              {tab.title}
            </button>
          </NavLink>
        ))}
      </ul>
      <div className="tab_content">
        {tabs.find(tab => id === tab.id)?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
