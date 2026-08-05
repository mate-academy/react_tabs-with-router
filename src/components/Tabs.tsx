import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface TabsPageProps {
  tabs: Tab[];
  activeTabId: string;
}

export const Tabs = ({ tabs = [], activeTabId }: TabsPageProps) => {
  const currentTab: Tab | undefined = tabs.find(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === currentTab?.id;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={isActive ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Требование: Выводим контент активной вкладки */}
      <div className="block" data-cy="TabContent">
        {currentTab?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
