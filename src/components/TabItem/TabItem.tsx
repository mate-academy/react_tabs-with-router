import classNames from 'classnames';
import React, { memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
};

export const TabItem: React.FC<Props> = memo(({
  tab,
}) => {
  const { tabId } = useParams();

  return (
    <li
      key={tab.id}
      className={classNames(
        { 'is-active': tab.id === tabId },
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
