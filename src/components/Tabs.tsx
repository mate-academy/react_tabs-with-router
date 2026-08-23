import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  tabId: string | undefined;
};

export const Tabs = ({ tabs, tabId }: Props) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={cn(tab.id === tabId && 'is-active')}
        >
          <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);
