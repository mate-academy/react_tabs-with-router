import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { tabs } from '../tabsInit';

interface Props {
  tabId: string | null;
}

export const TabsList: React.FC<Props> = ({ tabId }) => (
  <ul>
    {tabs.map(tab => (
      <li
        data-cy="Tab"
        key={tab.id}
        className={classNames({ 'is-active': tabId === tab.id })}
      >
        <Link to={`../${tab.id}`}>{tab.title}</Link>
      </li>
    ))}
  </ul>
);
