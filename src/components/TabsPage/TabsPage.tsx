import React from 'react';
import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[]
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();
  const currTab = tabs.find((tab) => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tabId === tab.id })}
            >
              <NavLink
                to={`../${tab.id}`}
                className={({ isActive }) => (classNames('navbar-item', {
                  'is-active': isActive,
                }))}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currTab ? currTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
