import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab as TabType } from '../types/Tab';

type Props = {
  tab: TabType;
};

export const Tab: React.FC<Props> = ({
  tab,
}) => {
  const { tabId } = useParams();

  return (
    <li
      data-cy="Tab"
      className={classNames({
        'is-active': tab.id === tabId,
      })}
    >
      <Link to={`../${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
