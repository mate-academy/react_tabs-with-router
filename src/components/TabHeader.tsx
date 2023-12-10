import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tab: Tab;
  selectedTab: string;
}
export default function TabHeader({ tab, selectedTab }: Props) {
  const { id, title } = tab;
  const isActive = id === selectedTab;

  return (
    <li
      data-cy="Tab"
      className={isActive ? 'is-active' : ''}
    >
      <Link to={id}>{title}</Link>
    </li>
  );
}
