import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import React from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  tabs: Tab[];
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabsId } = useParams();
  const selectedTab = tabsId ? tabsId : null;
  const activeTab = tabs.find(({ id }) => id === selectedTab) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={cn({ 'is-active': activeTab?.id === tab.id })}
              >
                <Link to={`../${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab?.content || 'Please select a tab'}
        {/*Please select a tab*/}
      </div>
    </>
  );
};
