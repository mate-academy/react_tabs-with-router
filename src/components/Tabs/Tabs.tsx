import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab: Tab | null;
};

export const Tabs: React.FC<Props> = memo(({ tabs, selectedTab }) => {
  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = tab === selectedTab;

            return (
              <li
                data-cy="Tab"
                className={classNames({ 'is-active': isSelected })}
              >
                <Link to={`../${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
});
