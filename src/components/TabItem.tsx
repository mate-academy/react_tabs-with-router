import React, { FC } from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
};

export const TabItem: FC<Props> = React.memo(({ tab }) => {
  const { tabId } = useParams();

  return (
    <li
      data-cy="Tab"
      className={classNames(
        { 'is-active': tabId === tab.id },
      )}
    >
      <Link
        to={`../${tab.id}`}
        data-cu="TabLink"
      >
        {tab.title}
      </Link>
    </li>
  );
});
