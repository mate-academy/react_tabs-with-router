import ClassNames from 'classnames';
import { Link } from 'react-router-dom';
import { tabs } from '../../api';

type Props = {
  tabId: string | undefined;
};

export const Tab: React.FC<Props> = ({ tabId }) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        data-cy="Tab"
        className={ClassNames({ 'is-active': tabId === tab.id })}
      >
        <Link to={`../${tab.id}`}>{tab.title}</Link>
      </li>
    ))}
  </ul>
);
