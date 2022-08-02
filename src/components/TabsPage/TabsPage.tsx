import classNames from 'classnames';
import {
  useParams,
  NavLink,
} from 'react-router-dom';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="card p-4">
      <h1 className="title ml-5">Tabs page</h1>
      <nav>
        {tabs.map(tab => (
          <NavLink
            key={tab.id}
            to={`${tab.id}`}
            className={({ isActive }) => classNames(
              'button is-light',
              { 'is-danger': !isActive },
              { 'is-success': isActive },
            )}
          >
            {tab.title}
          </NavLink>
        ))}
      </nav>

      {(!tabId || !selectedTab) && (
        <h2 className="subtitle is-warning p-3">
          Please select a tab
        </h2>
      )}

      {selectedTab && (
        <div className="subtitle has-background-success-light p-3">
          {selectedTab.content}
        </div>
      )}
    </div>
  );
};
