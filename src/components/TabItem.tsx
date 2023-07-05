import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
  tabId: string;
};

export const TabItem: FC<Props> = ({ tab, tabId }) => {
  const isSelected = (item: Tab) => item.id === tabId;

  const {
    id,
    title,
  } = tab;

  return (
    <li
      data-cy="Tab"
      className={classNames({
        'is-active': isSelected(tab),
      })}
    >
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
