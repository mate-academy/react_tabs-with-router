import React from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
};

export const TabItem: React.FC<Props> = ({ tab }) => {
  const {
    id,
    title,
  } = tab;

  const { tabId } = useParams();

  const isTabSelected = id === tabId;

  return (
    <li
      key={id}
      data-cy="Tab"
      className={cn({ 'is-active': isTabSelected })}
    >
      <Link
        to={`${id}`}
        data-cy="TabLink"
      >
        {title}
      </Link>
    </li>
  );
};
