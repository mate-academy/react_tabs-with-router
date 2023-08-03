/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
};

export const TabInfo: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();
  const selectedTabId = tabId || 0;

  return (
    <li
      className={classNames({
        'is-active': selectedTabId === tab.id,
      })}
      data-cy="Tab"
      key={tab.id}
    >
      <Link
        to={`../${tab.id}`}
      >
        {tab.title}
      </Link>
    </li>
  );
};
