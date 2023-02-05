import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab
};

export const TabItem: React.FC<Props> = React.memo(({ tab }) => {
  const { tabId } = useParams();

  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': tabId === tab.id })}
    >
      <Link to={`../${tab.id}`}>
        {tab.title}
      </Link>
    </li>
  );
});
