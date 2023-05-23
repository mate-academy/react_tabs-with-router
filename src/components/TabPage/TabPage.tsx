import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
  selectedTabId?: string;
};

export const TabPage: FC<Props> = ({ tab, selectedTabId }) => {
  const {
    id,
    title,
  } = tab;

  return (
    <>
      <li
        data-cy="Tab"
        className={cn(
          { 'is-active': id === selectedTabId },
        )}
      >
        <Link to={`/tabs/${id}`}>
          {title}
        </Link>
      </li>
    </>
  );
};
