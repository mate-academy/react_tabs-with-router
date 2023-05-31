import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { Tab as TabType } from '../types/Tab';
import { Tab, TabsMap } from '../components/Tab';

type TabsPageProps = {
  tabs: TabType[];
};

export const TabsPage = ({ tabs }: TabsPageProps) => {
  const { tabId } = useParams();

  const tabsMap = useMemo(
    () => tabs.reduce(
      (acc, currTab) => ({
        ...acc,
        [currTab.id]: { ...currTab },
      }),
      {} as TabsMap,
    ),
    [tabs],
  );

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === id })}
            >
              <Link to={`/tabs/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Tab tabsMap={tabsMap} activeTabId={tabId} />
    </>
  );
};
