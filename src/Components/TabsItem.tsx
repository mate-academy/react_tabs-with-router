import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab,
  setSelectedTab: (tab: Tab) => void,
  selectedTabId?: string,
};

export const TabsItem: React.FC<Props> = ({
  tab,
  setSelectedTab,
  selectedTabId,
}) => (
  <li
    data-cy="Tab"
    className={classNames({
      'is-active': selectedTabId === tab.id,
    })}
  >
    <Link
      to={`/tabs/${tab.id}`}
      onClick={() => {
        setSelectedTab(tab);
      }}
    >
      {tab.title}
    </Link>
  </li>
);
