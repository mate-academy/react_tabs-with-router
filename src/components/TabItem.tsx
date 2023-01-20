import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
  selectedTab: string;
};

export const TabItem: FC<Props> = ({ tab, selectedTab }) => {
  const isSelected = (item: Tab) => item.id === selectedTab;

  return (
    <li
      className={classNames({
        'is-active': isSelected(tab),
      })}
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
};
