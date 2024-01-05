import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Tab as TabType } from '../../../types/Tab';

interface Props {
  tab: TabType,
  selectedTabId: string | null,
}

export const Tab: React.FC<Props> = ({
  tab,
  selectedTabId,
}) => (
  <li
    data-cy="Tab"
    className={classNames({ 'is-active': tab.id === selectedTabId })}
    key={tab.id}
  >
    <NavLink to={`../${tab.id}`}>{tab.title}</NavLink>
  </li>
);
