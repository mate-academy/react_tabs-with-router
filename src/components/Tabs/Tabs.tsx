import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from '../Tab/Tab';
import { TabInterface } from '../../constants/types';

interface Props {
  tabs: TabInterface[];
  tabId: string;
}

export const Tabs: FC<Props> = ({ tabs, tabId }) => {
  const tabData = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <ul className="tabs list">
        {
          tabs.map((tab) => (
            <li key={tab.id} className="tabs__item">
              <NavLink
                to={`/tabs/${tab.id}`}
                className="tabs__link"
                activeClassName="tabs__link--active"
              >
                {tab.id}
              </NavLink>
            </li>
          ))
        }
      </ul>
      {tabData && (
        <Tab content={tabData.content} />
      )}
    </>
  );
};
