import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab,
  tabId?: string
}

export const TabPage: React.FC<Props> = ({ tab, tabId }) => (
  <li data-cy="Tab" className={cn({ 'is-active': tab.id === tabId })}>
    <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
  </li>
);
