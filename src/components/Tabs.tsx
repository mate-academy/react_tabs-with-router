import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

import { Tab } from '../types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab: undefined | Tab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed" data-cy="TabsComponent">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': activeTab?.id === tab.id })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
