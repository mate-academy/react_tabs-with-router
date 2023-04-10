import classNames from 'classnames';
import React, { useMemo } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import { Tab } from '../../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const match = useMatch('/tabs/:tabId');
  const selectedTabId = match?.params.tabId;

  const selectedTab = useMemo(() => {
    return tabs.filter(tab => tab.id === selectedTabId);
  }, [selectedTabId, tabs]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                className={classNames(
                  { 'is-active': id === selectedTabId },
                )}
              >
                <NavLink to={`/tabs/${id}`}>
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.length
          ? selectedTab[0].content
          : 'Please select a tab'}
      </div>
    </>
  );
};
