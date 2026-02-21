import React from 'react';
import classNames from 'classnames';
// import { getSelectedTab } from './../functions';
// import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';
// import { Link, Outlet, useParams } from 'react-router-dom';

import { tabs } from '../constants/tabs';
// import { Tab } from '../types/Tab';

const NOTIFICATION = 'Please select a tab';

export const Tabs: React.FC = () => {
  // const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  const { tabId } = useParams();

  // function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
  //   const id = event.currentTarget.id;

  //   setSelectedTab(getSelectedTab(tabs, id));
  // }

  // const selectedId = selectedTab ? selectedTab.id : 0;
  // const content = selectedTab ? selectedTab.content : NOTIFICATION;

  // function getContent(id: string | undefined): string {
  //   const getSelectedTab = (selectedId: string | undefined) => {
  //     return tabs.find(tab => tab.id === selectedId) ?? null;
  //   };

  //   const selectedTab = getSelectedTab(id);

  //   return selectedTab ? selectedTab.content : NOTIFICATION;
  // }

  const selectedTab = tabId
    ? (tabs.find(tab => tab.id === tabId) ?? null)
    : null;

  const content = selectedTab ? selectedTab.content : NOTIFICATION;

  return (
    <>
      {/* <Outlet /> */}
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tab.id === tabId })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink" id={tab.id}>
                {/* <Link to={`../${tab.id}`} data-cy="TabLink" id={tab.id}> */}
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </>
  );
};
