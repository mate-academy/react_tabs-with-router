import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../../types/Tab';

type Props = {
  tab: Tab,
  selectedTabId: string
};

export const TabItem: React.FC<Props> = ({
  tab,
  selectedTabId,
}) => {
  const isSelected = (tabId: string) => tabId === selectedTabId;

  return (
    <li
      data-cy="Tab"
      key={tab.id}
      className={classNames({ 'is-active': isSelected(tab.id) })}
    >
      <Link
        to={`/tabs/${tab.id}`}
      >
        {tab.title}
      </Link>
    </li>
  );
};
