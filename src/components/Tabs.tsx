import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const params = useParams();
  const activeTabId = params.tabId;

  const activeTab = tabs.find(tab => tab.id === activeTabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab: Tab) => {
              return (
                <li
                  key={tab.id}
                  className={tab.id === activeTab?.id ? 'is-active' : ''}
                  data-cy="Tab"
                >
                  <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                    {tab.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {activeTab ? activeTab.content : 'Please select a tab'}
        </div>
      </div>
    </>
  );
};
