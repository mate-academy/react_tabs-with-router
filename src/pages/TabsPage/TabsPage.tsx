import { NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';

const tabs = [
  { id: 1, title: 'Tab 1', content: 'Some text 1' },
  { id: 2, title: 'Tab 2', content: 'Some text 2' },
  { id: 3, title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const activeTab = tabs.find(tab => `tab-${tab.id}` === tabId);

  return (
    <div data-cy="TabsPage">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-centered">
        <ul>
          {tabs.map(tab => {
            const isActive = activeTab?.id === tab.id;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({ 'is-active': isActive })}
              >
                <NavLink to={`/tabs/tab-${tab.id}`}>
                  <span>{tab.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
