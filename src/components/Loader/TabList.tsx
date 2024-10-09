import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  id: string;
  title: string;
  selectedTab: Tab | null;
}

export const TabList: React.FC<Props> = ({ id, title, selectedTab }) => {
  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': selectedTab?.id === id })}
    >
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
