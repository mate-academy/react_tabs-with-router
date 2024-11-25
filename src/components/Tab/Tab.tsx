import React from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab as TabType } from '../../types/Tab';

type Props = {
  tab: TabType;
};

export const Tab: React.FC<Props> = ({ tab }) => {
  const { title, id } = tab;
  const { tabId } = useParams();
  const activeTab = id === tabId;

  return (
    <li
      data-cy="Tab"
      className={cn({
        'is-active': activeTab,
      })}
    >
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
