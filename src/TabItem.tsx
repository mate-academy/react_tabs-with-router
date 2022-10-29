import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from './types/Tab';

type Props = {
  tab: Tab,
  selectedTab: string,
};

export const TabItem: FC<Props> = ({ tab, selectedTab }) => {
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      className={classNames(
        '',
        { 'is-active': selectedTab === id },
      )}
    >
      <Link to={`../${id}`}>{title}</Link>
    </li>
  );
};
