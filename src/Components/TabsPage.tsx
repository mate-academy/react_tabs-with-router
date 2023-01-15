import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[] | undefined;
  tabId: string;
};

export const TabsPage: FC<Props> = ({ tabs, tabId = '' }) => {
  const isActive = (tab: Tab) => tab.id === tabId;
  const selectedTab = tabs?.find((tab) => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs?.map((tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames('tab', { 'is-active': isActive(tab) })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {tabId === '' ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          {selectedTab && selectedTab.content}
        </div>
      )}
    </>
  );
};
