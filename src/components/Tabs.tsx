import React, { useMemo } from 'react';
import './Tabs.css';
import cn from 'classnames';
import { Redirect, NavLink } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  currentTabId: string;
}
export const Tabs: React.FC<Props> = ({ tabs, currentTabId }) => {
  const index = useMemo(() => {
    return tabs.findIndex(tab => tab.id === currentTabId)
  }, [tabs, currentTabId])

  const defaultTabId = tabs[0].id;

  if (!currentTabId) {
    return <Redirect to={`/tabs/${defaultTabId}`} />
  }

  return (
    <>
      <h2>Tabs</h2>
      <ul className="tab__list">
        {tabs.map(tab => (
          <li
            className={cn('tab__item', { 'tab__item--active': currentTabId === tab.id })}
            key={tab.id}
          >
            <NavLink
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <section className="tab__content">{tabs[index].content}</section>
    </>
  );
}
