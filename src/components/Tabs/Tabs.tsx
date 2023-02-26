import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTab: Tab | null,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab }) => {
  return (
    <div className="tabs is-boxed">
      <ul>

        {tabs.map(tab => {
          const { id, title } = tab;
          const isSelectedTab = selectedTab?.id === id;

          return (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': isSelectedTab })}
            >
              <Link to={`../${id}`}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
