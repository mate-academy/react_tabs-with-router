/* eslint-disable import/no-cycle */
/* eslint-disable object-curly-newline */
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { tabs } from '../App';
import './Tabs.scss';

export const Tabs = () => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <section className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li className="tabs__item" key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
              className="tabs__link"
              activeClassName="tabs__link--selected"
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {currentTab
        ? (
          <p className="tabs__content">{currentTab.content}</p>
        )
        : <p className="tabs__content">Please select a tab</p>}
    </section>
  );
};
