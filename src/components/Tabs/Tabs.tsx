import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  activeTab: Tab | undefined;
};

export const Tabs: React.FC<Props> = ({ tabs, activeTab }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={classNames({ 'is-active': activeTab?.id === tab.id })}
        >
          <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  );
};
