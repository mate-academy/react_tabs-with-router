import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';

import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
};

export const TabItem: React.FC<Props> = React.memo(({ tab }) => {
  const { tabId } = useParams();

  return (
    <li
      className={classnames(
        { 'is-active': tabId === tab.id },
      )}
      data-cy="Tab"
    >
      <Link
        to={`../${tab.id}`}
        data-cy="TabLink"
      >
        {tab.title}
      </Link>
    </li>
  );
});
