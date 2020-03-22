import React, { FC } from 'react';
import {
  NavLink,
} from 'react-router-dom';
import { Tab } from '../Tab/Tab';
import { TabInterface } from '../../constants/types';

interface Props {
  tabs: TabInterface[];
  tabId: string;
}

export const Tabs: FC<Props> = ({ tabs, tabId }) => {
  const visibleContent = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <ul className="listTabs">
        {
          tabs.map((tab) => (
            <li key={tab.id} className="listTabs__item">
              <NavLink
                to={`/tabs/${tab.id}`}
                className="listTabs__link"
                activeClassName="listTabs__link--active"
              >
                {tab.id}
              </NavLink>
            </li>
          ))
        }
      </ul>
      {visibleContent && (
        <Tab content={visibleContent.content} />
      )}
    </>
  );
};
