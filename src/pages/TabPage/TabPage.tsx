import cn from 'classnames';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab,
  tabId: string | undefined,
}

export const TabPage: FC<Props> = ({ tab, tabId }) => {
  return (
    <li data-cy="Tab" className={cn({ 'is-active': tabId === tab.id })}>
      <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
        {tab.title}
      </Link>
    </li>
  );
};
