import { FC } from 'react';

import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

export type LinkProps = {
  path: string;
  title: string;
};

export const TabLink: FC<LinkProps> = ({ path, title }) => {
  const { tabId = '' } = useParams();

  return (
    <li data-cy="Tab" className={classNames({ 'is-active': tabId === path })}>
      <Link to={path}>{title}</Link>
    </li>
  );
};
