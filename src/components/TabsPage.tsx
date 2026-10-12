import React from 'react';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
};

const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': activeTab?.id === tab.id,
              })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : <>Please select a tab</>}
      </div>
    </>
  );
};

export default TabsPage;
