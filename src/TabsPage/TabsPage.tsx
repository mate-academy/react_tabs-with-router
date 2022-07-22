import {
  useParams,
  NavLink,
} from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  const askToSelectTab = () => {
    return !tabId || !selectedTab;
  };

  return (
    <div className="TabsPage">
      <h1 className="TabsPage__title">Tabs page</h1>
      <div className="TabsPage__nav">
        {tabs.map(tab => (
          <NavLink
            key={tab.id}
            to={`${tab.id}`}
            className={({ isActive }) => classNames(
              'navbar-item',
              'is-tab',
              { 'is-active': isActive },
            )}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>

      {askToSelectTab() && (
        <h2 className="TabsPage__info-message">
          Please select a tab
        </h2>
      )}

      {selectedTab && (
        <div className="TabsPage__content">
          {selectedTab.content}
        </div>
      )}
    </div>
  );
};
