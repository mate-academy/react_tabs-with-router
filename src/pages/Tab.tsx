import { Link, useParams } from 'react-router-dom';
import React from 'react';
import cn from 'classnames';
import { TabType } from '../types/TabType';

type Props = {
  tab: TabType;
};

export const Tab: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();

  return (
    <li
      data-cy="Tab"
      className={cn({
        'is-active': tab.id === tabId,
      })}
    >
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
