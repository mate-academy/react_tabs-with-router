import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab,
  selectedTab: Tab | undefined,
}

export const TabItem: React.FC<Props> = ({ tab, selectedTab }) => {
  return (
    <li
      data-cy="Tab"
      className={classNames(
        { 'is-active': selectedTab?.id === tab.id },
      )}
      key={tab.id}
    >
      <Link to={`/tabs/${tab.id}`}>
        {tab.title}
      </Link>
    </li>
  );
};
