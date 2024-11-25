import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
  tabId: string | undefined;
}

const TabPage: React.FC<Props> = ({ tab, tabId }) => {
  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': tab.id === tabId })}
      key={tab.id}
    >
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};

export default TabPage;
