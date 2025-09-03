import { Link } from 'react-router-dom';
import { TabContent } from './TabContent';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  tabId: string | undefined;
};

export const Tabs: React.FC<Props> = ({ tabs, tabId }) => {
  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <TabContent />
    </div>
  );
};
