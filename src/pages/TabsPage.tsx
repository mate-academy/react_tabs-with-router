import { Link, useParams } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId;

  const selectedTab = tabs
    .find(current => selectedTabId === current.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(currentTab => (
            <li
              data-cy="Tab"
              key={currentTab.id}
              className={classNames({
                'is-active': currentTab.id === selectedTabId,
              })}
            >
              <Link
                to={`/tabs/${currentTab.id}`}
              >
                {currentTab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        { selectedTab?.content ?? 'Please select a tab'}
      </div>
    </>
  );
};
