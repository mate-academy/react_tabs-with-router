import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { tabs } from '../../common/tabs-data';

type Props = {
  selectedTabId: string;
};

export const TabNav: React.FC<Props> = React.memo(({ selectedTabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={classNames(
              {
                'is-active': tab.id === selectedTabId,
              },
            )}
          >
            <Link to={`/tabs/${tab.id}`}>
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
