import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab,
  activeTabId: string | null,
};

export const TabItem: React.FC<Props> = ({ tab, activeTabId }) => {
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      className={cn({ 'is-active': id === activeTabId })}
    >
      <Link to={id}>{title}</Link>
    </li>
  );
};
