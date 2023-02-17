import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
  tabId: string | undefined,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  tabId,
}) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <li
            data-cy="Tab"
            key={tab.id}
            className={classNames(
              { 'is-active': tab.id === tabId },
            )}
          >
            <Link
              to={`#/${tab.id}`}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
