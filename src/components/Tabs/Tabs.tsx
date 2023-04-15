import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string | null;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { title, id } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames(
                  { 'is-active': selectedTab?.id === id },
                )}
              >
                <Link to={`/tabs/${id}`}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
