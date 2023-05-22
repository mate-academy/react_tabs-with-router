import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

export type Props = {
  tabs: Tab[],
  selectedTab: string,
};

export const TabList: React.FC<Props> = ({ tabs, selectedTab }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          data-cy="Tab"
          className={classNames({
            'is-active': tab.id === selectedTab,
          })}
          key={tab.id}
        >
          <Link to={`../${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);
