import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
  tabId: string;
};

export const TabsItem: React.FC<Props> = ({ tab, tabId }) => {
  const { id, title } = tab;

  return (
    <li
      className={cn({
        'is-active': tabId === id,
      })}
      data-cy="Tab"
    >
      <Link
        to={`/tabs/${id}`}
        data-cy="TabLink"
      >
        {title}
      </Link>
    </li>
  );
};
