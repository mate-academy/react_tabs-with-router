import React, {useMemo, useState, useCallback} from 'react';
import { NavLink, Route } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  tabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, tabId }) => {
  const selectedTab = useMemo(() => (
    tabs.find(tab => tab.id === tabId)
  ), [tabId, tabs]);
  const [currentTab, setCurrentTab] = useState((selectedTab || {}).content);
  const handleTabClick = useCallback(content => {
    setCurrentTab(content);
  }, []);


  return (
    <>
      <h1>Tabs Page</h1>
      <ul className="tabs__list">
        {tabs.map(({ id, title, content }) => (
          <li
            key={id}
            className="tabs__item"
          >
            <NavLink
              to={`/tabs/${id}`}
              className="tabs__link"
              activeClassName="tab__link-active"
              onClick={() => handleTabClick(content)}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Route
        path="/tabs"
        render={() => (
          <div className="description">
            <p className="description__text">{currentTab}</p>
          </div>
        )}
      />
    </>
  );
};
