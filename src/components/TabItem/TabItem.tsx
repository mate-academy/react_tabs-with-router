import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  selectedTabId: string,
};

export const TabItem: React.FC<Props> = ({ tab, selectedTabId }) => {
  const { id, title } = tab;
  const isSelected = selectedTabId === id;

  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': isSelected })}
    >
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
