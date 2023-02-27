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
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      key={id}
      className={classNames({ 'is-active': isSelected(id) })}
    >
      <Link
        to={`/tabs/${id}`}
      >
        {title}
      </Link>
    </li>
  );
};
