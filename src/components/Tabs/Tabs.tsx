import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  activeTabId?: string;
};

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === activeTabId ? 'is-active' : ''}
            data-cy="Tab"
          >
            <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
