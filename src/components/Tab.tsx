import { Link } from 'react-router-dom';
import cn from 'classnames';

type TabProps = {
  tab: {
    id: string;
    title: string;
  };
  tabId?: string;
};

export const Tab = ({ tab, tabId }: TabProps) => {
  return (
    <li data-cy="Tab" className={cn({ 'is-active': tabId === tab.id })}>
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
