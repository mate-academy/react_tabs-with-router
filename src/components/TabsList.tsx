import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
  currentTab: Tab | null;
};

export const TabsList: React.FC<Props> = ({ tab, currentTab }) => {
  return (
    <li
      className={cn({
        'is-active': tab.id === currentTab?.id,
      })}
      data-cy="Tab"
    >
      <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
        {tab.title}
      </Link>
    </li>
  );
};
