import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={classnames({
              'is-active': tab.id === selectedTabId,
            })}
          >
            <Link to={`../${tab.id}`}>
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
