import cn from 'classnames';
import { Tab } from '../../types/Tab';
import { Link } from 'react-router-dom';

interface Props {
  tab: Tab;
  selectedTab: string | undefined;
}

export const TabList: React.FC<Props> = ({ tab, selectedTab }: Props) => {
  const { id, title } = tab;
  const activeTab = selectedTab === id;

  return (
    <li data-cy="Tab" className={cn({ 'is-active': activeTab })}>
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
