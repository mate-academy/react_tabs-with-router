import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTab: Tab | null,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => {
        const { title, id } = tab;
        const isTabSelected = Boolean(selectedTab?.id === id);

        return (
          <li
            data-cy="Tab"
            className={cn({ 'is-active': isTabSelected })}
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
