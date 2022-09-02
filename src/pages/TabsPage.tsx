import classNames from 'classnames';
import { FC, useCallback, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

interface Tab {
  id: string,
  title: string,
  content: string,
}

const tabs: Tab [] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: FC = () => {
  const { tabId = '' } = useParams();

  const isSelected = useCallback((tab: Tab) => (
    tab.id === tabId
  ), [tabId]);

  const selectedTab = useMemo(() => (
    tabs.find(tab => tab.id === tabId)
  ), [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="tab"
              className={classNames('tab', { 'is-active': isSelected(tab) })}
            >
              <Link
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
