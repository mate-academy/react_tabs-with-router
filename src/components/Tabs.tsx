import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  tabs: Tab[],
  currentTabId: string,
};

export const Tabs: React.FC<Props> = ({ tabs, currentTabId }) => {
  const activeTab = useMemo(() => (
    tabs.find(tab => currentTabId === tab.id)
  ), [currentTabId, tabs]);

  return (
    <>
      <p className="tabs__title">Tabs</p>
      <div className="tabs__wrap">
        <ul className="tabs__list">
          {tabs.map(({ id, title }) => (
            <li key={id} className="tabs__item">
              <NavLink
                className="tabs__link"
                activeClassName="tabs__link--active"
                to={`/tabs/${id}`}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {activeTab && (
          <div className="tabs__content">
            <p className="tab__content">
              {activeTab.content}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
