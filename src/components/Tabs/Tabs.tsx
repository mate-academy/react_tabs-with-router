import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
  selectedTab: string ;
};

export const Tabs: React.FC<Props> = ({ tab, selectedTab }) => {
  return (
    <li
      data-cy="Tab"
      className={classnames({
        'is-active': tab.id === selectedTab,
      })}
    >
      <Link to={`../${tab.id}`}>
        {tab.title}
      </Link>
    </li>
  );
};
