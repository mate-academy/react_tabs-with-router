const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

export const TabsPage = () => {
  const tabId = useParams<{ tabId?: string }>().tabId || '';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          <li
            data-cy="Tab"
            className={cn({ 'is-active': tabs[0].id === tabId })}
          >
            <Link to={'/tabs/' + tabs[0].id}>Tab 1</Link>
          </li>
          <li
            data-cy="Tab"
            className={cn({ 'is-active': tabs[1].id === tabId })}
          >
            <Link to={'/tabs/' + tabs[1].id}>Tab 2</Link>
          </li>
          <li
            data-cy="Tab"
            className={cn({ 'is-active': tabs[2].id === tabId })}
          >
            <Link to={'/tabs/' + tabs[2].id}>Tab 3</Link>
          </li>
        </ul>
      </div>
      <div className="section">
        <div className="container">
          <div className="block" data-cy="TabContent">
            {tabs.find(({ id }) => tabId === id)?.content ||
              'Please select a tab'}
          </div>
        </div>
      </div>
    </>
  );
};
