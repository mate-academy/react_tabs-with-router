import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
};

export const TabItem: React.FC<Props> = ({ tab }) => (
  <li
    data-cy="Tab"
    className={classNames({ 'is-active': tab.id === tab.title })}
  >
    <Link to={`../${tab.id}`}>
      {tab.title}
    </Link>
  </li>
);
