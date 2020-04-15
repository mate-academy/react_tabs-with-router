/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { tabs } from '../api';
import { Tab } from '../interfaces';

interface Props {
  tabs?: Tab[];
  activeTab: string;
}

export const Tabs: FC<Props> = ({ activeTab }) => {
  const tabContent = tabs.find(tab => tab.id === activeTab);

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <NavLink
            to={`/tabs/${tab.id}`}
            key={tab.id}
            className="tab__link"
            activeClassName="tab__link--active"
          >
            {tab.title}
          </NavLink>
        ))}
      </ul>
      <p>{tabContent?.content}</p>
    </>
  );
};
