import React, { useMemo } from 'react';
import { Redirect } from 'react-router';
import CN from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  currentTab: string;
};

export const Tabs: React.FC<Props> = ({ tabs, currentTab }) => {
  const index = useMemo(() => {
    return tabs.findIndex(tab => tab.id === currentTab);
  }, [tabs, currentTab]);

  const defaultTabId = tabs[0].id;

  if (!currentTab) {
    return <Redirect to={`/tabs/${defaultTabId}`} />;
  }

  return (
    <>
      <h2>Tabs</h2>
      <ul className="tabs">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={CN('tab__item', {
              'tab__item--active': currentTab === tab.id,
            })}
          >
            <NavLink
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <section>{tabs[index].content}</section>
    </>
  );
};
