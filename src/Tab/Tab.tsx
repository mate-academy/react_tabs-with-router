import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
  selectedTabId: string | undefined;
};

export const TabItem: FC<Props> = ({ tab, selectedTabId }) => {
  const { id, title } = tab;

  return (
    <li
      key={id}
      data-cy="Tab"
      className={cn({
        'is-active': id === selectedTabId,
      })}
    >
      <Link to={id}>
        {title}
      </Link>
    </li>
  );
};
