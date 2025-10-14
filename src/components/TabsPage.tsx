import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();

  const tab = tabs.find(t => t.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tabItem => (
              <li
                data-cy="Tab"
                key={tabItem.id}
                className={tabId === tabItem.id ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tabItem.id}`}>{tabItem.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tab ? <p>{tab.content}</p> : <p>Please select a tab</p>}
        </div>
      </div>
    </div>
  );
};
