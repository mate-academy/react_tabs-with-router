import { FC } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { TabType } from '../../types';

interface TabProps {
  tab: TabType;
  tabId: string;
}

export const Tab: FC<TabProps> = ({ tab, tabId }) => {
  const { id, title } = tab;

  return (
    <li
      key={id}
      data-cy="Tab"
      className={cn({
        'is-active': id === tabId,
      })}
    >
      <Link to={`../${id}`}>{title}</Link>
    </li>
  );
};
