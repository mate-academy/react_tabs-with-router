import { Link, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const isTabIdSelected = tabId || '';
  const selectedTab = tabs.find(tab => tab.id === isTabIdSelected);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isTabSelected = tab.id === isTabIdSelected;

            return (
              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': isTabSelected,
                })}
                key={tab.id}
              >
                <Link
                  to={`/tabs/${tab.id}`}
                >
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Outlet />
      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab?.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
