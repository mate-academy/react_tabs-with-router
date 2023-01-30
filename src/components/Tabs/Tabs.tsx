import classNames from 'classnames';
import { FC, memo, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import tabs from '../../data/tabs.json';

export const Tabs: FC = memo(() => {
  const { tabId: selectedTabId } = useParams();

  const selectedTab = useMemo(() => {
    return tabs.find(({ id }) => id === selectedTabId) ?? null;
  }, [selectedTabId, tabs]);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              key={tab.id}
              className={classNames(
                { 'is-active': tab.id === selectedTabId },
              )}
              data-cy="Tab"
            >
              <Link
                to={`../${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </div>
  );
});
