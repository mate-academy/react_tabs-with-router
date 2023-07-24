import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab,
  active: Tab | undefined,
};

export const TabItem: React.FC<Props> = ({ tab, active }) => {
  return (
    <>
      <li
        data-cy="Tab"
        className={classNames({ 'is-active': active?.id === tab.id })}
      >
        <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
      </li>
    </>
  );
};
