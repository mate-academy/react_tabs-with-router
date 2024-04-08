import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';
import classNames from 'classnames';

type Props = {
  tab: Tab;
  tabId: string | undefined;
};
export const TabPage: React.FC<Props> = ({ tab, tabId }) => (
  <li
    key={tab.id}
    data-cy="Tab"
    className={classNames({ 'is-active': tab.id === tabId })}
  >
    <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
  </li>
);
