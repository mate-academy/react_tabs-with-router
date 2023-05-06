import { Link } from 'react-router-dom';
import classNames from 'classnames';
import React from 'react';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
}) => {
  const tabId = selectedTabId.slice(-1);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isActive = tab.id === selectedTabId;

            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={classNames({
                  'is-active': isActive,
                })}
              >
                <Link
                  to={`/tabs/${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {selectedTabId === '' || +tabId > 3
          ? (
            'Please select a tab'
          ) : (
            `Some text ${tabId}`
          )}
      </div>
    </div>
  );
};
