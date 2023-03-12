import {
  Link,
} from 'react-router-dom';
import cn from 'classnames';
import { Tab } from './types/Tab';

type Props = {
  activeTabId: string | undefined;
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ activeTabId, tabs }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={cn({ 'is-active': activeTabId === id })}
              >
                <Link
                  to={`/tabs/${id}`}
                >
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab
          ? activeTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
