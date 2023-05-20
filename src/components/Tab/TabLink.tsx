import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
  activeTabId?: string
};

export const TabLink: FC<Props> = ({ tab, activeTabId }) => {
  return (
    <li
      data-cy="Tab"
      className={
        classNames({ 'is-active': tab.id === activeTabId })
      }
    >
      <Link
        to={`../tabs/${tab.id}`}
      >
        {tab.title}
      </Link>
    </li>
  );
};
