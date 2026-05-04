import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  tab: {
    id: string;
    title: string;
    content: string;
  };
  tabId: string | undefined;
};

export const Tab: React.FC<Props> = ({ tabId, tab }) => {
  return (
    <li
      key={tab.id}
      data-cy="Tab"
      className={classNames({
        'is-active': tab.id === tabId,
      })}
    >
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
