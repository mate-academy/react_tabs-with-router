import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  selectedTab: string
};

export const TabComponent: FC<Props> = React.memo(
  ({ tab, selectedTab }) => {
    const { title, id } = tab;

    return (
      <li
        data-cy="Tab"
        className={classNames({ 'is-active': selectedTab === id })}
      >
        <Link
          to={`/tabs/${id}`}
        >
          {title}
        </Link>
      </li>

    );
  },
);
