import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './TabsList.scss';

interface Props {
  tabs: Tab[];
  activeTab: string;
}

export const TabsList: FC<Props> = ({ tabs, activeTab }) => {
  const tabContent = tabs.find(tab => tab.id === activeTab);

  return (
    <>
      <ul className="tabs-nav">
        {tabs.map(tab => (
          <li className="tabs-nav__item">
            <NavLink to={`/tabs/${tab.id}`} key={tab.id} className="tabs-nav__link" activeClassName="active">
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <p className="text">{tabContent?.content}</p>
    </>
  );
};
