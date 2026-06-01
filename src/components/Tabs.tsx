import { Tab } from '../types/Tab';
import { Link } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  activeTabId?: string;
};

export const Tabs = ({ tabs, activeTabId }: Props) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === activeTab?.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab?.content : 'Please select a tab'}
      </div>
    </div>
  );
};
