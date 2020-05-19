import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import cN from 'classnames';
import { useTabContent } from './hooks/useTabContent';

export const Tabs = ({ tabs, currentTabId }: TabsProps) => {
  const {
    tabContent,
    handleSettingTab,
  } = useTabContent(tabs, currentTabId);

  return (
    <>
      <ul className="ul-tabs">
        {tabs.map(({ id, title, content }) => (
          <li key={id}>
            <NavLink
              to={`/tabs/${id}`}
              className={cN({
                tab__link: true,
                'tab__link--active': tabContent === content,
              })}
              activeClassName="tab__link--active"
              onClick={() => handleSettingTab(content)}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Route
        path="/tabs"
        render={() => (
          <div className="tab__content">
            {tabContent}
          </div>
        )}
      />
    </>
  );
};
