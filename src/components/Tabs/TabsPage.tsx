// import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
// import { TabsConstext } from '../../App';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  // const tabs = useContext(TabsConstext);

  const selectedTab = tabs.filter(tabElem => tabElem.id === tabId)[0];

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn(
                { 'is-active': tab.id === tabId },
              )}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
