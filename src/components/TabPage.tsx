import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
  selectedTab?: Tab;
};

export const TabPage: React.FC<Props> = ({ tab, selectedTab }) => (
  <li
    key={tab.id}
    data-cy="Tab"
    className={classNames({
      'is-active': selectedTab?.id === tab.id,
    })}
  >
    <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
  </li>
);
