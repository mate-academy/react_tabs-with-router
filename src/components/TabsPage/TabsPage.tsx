import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabContent } from '../TabContent';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': tabId === tab.id,
              })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <TabContent tabContent={selectedTab?.content} />
    </>
  );
};
