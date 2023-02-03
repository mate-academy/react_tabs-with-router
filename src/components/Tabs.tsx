import React, { memo, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

export type Props = {
  tabId: string | undefined,
  tabs: Tab[]
};

export const Tabs: React.FC<Props> = memo(({ tabs, tabId = '' }) => {
  const selectedTabContent = useMemo(() => (tab: Tab[]) => {
    const properTab = tab.find(el => el.id === tabId);

    return properTab?.content;
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames(
                { 'is-active': tabId === tab.id },
              )}
            >
              <NavLink to={`${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent(tabs) || 'Please select a tab'}
      </div>
    </>
  );
});
