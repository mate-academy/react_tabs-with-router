import React from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  tab: {
    id: string;
    title: string;
    content: string;
  },
};

export const TabItem: React.FC<Props> = React.memo(({ tab }) => {
  const { tabId } = useParams();
  const activeId = tabId || '';

  return (
    <li
      data-cy="Tab"
      className={cn({
        'is-active': tab.id === activeId,
      })}
    >
      <Link
        to={`../${tab.id}`}
      >
        {tab.title}
      </Link>
    </li>
  );
});
