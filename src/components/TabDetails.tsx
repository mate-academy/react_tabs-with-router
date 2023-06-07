import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
  selectedTab: (tab: Tab) => boolean;
};

export const TabDetails:FC<Props> = ({ tab, selectedTab }) => {
  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': selectedTab(tab) })}
    >
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
