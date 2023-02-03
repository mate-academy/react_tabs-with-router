import { memo } from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = memo(() => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => (tab.id === tabId));

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={
                cn({ 'is-active': tab.id === selectedTab?.id })
              }
              data-cy="Tab"
              key={tab.id}
            >
              <Link
                to={tab.id}
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab?.content : 'Please select a tab'}
      </div>
    </>
  );
});
