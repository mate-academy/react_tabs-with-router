import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { useEffect } from 'react';

type TabsPageProps = {
  tabs: Tab[];
  selectedTabId: Tab | null;
  onTabSelected: (tab: Tab | null) => void;
};

export const TabsPage = ({
  tabs,
  selectedTabId,
  onTabSelected,
}: TabsPageProps) => {
  const { tabId } = useParams();

  useEffect(() => {
    if (tabId) {
      const tabFound = tabs.find(tab => tab.id === tabId) ?? null;

      onTabSelected(tabFound);
    }
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': selectedTabId?.id === tab.id,
              })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {tabId && tabs.find(tab => tab.id === tabId) ? (
        <div className="block" data-cy="TabContent">
          {selectedTabId?.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
