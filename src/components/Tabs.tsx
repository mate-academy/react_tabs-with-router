import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  activeTabId: string | undefined;
};

export const Tabs = ({ tabs, activeTabId }: Props) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <>
      <div className="tabs is-boxed" data-cy="TabsComponent">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeTab?.id ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
