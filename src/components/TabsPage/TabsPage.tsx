import React, { FC } from 'react';
import { Props } from '../../typeScript';
import { NavLink, useParams } from 'react-router-dom';
import { PageContent } from '../PageContent/PageContent';

export const TabsPage: FC<Props> = (props) => {
  const { tabs } = props;
  const params = useParams<{ tabId: string }>();
  const { tabId } = params;
  const selectedTab = tabs.find(tab => tab.id === tabId);

  console.log(tabId)
  return (
    <>
      <div className="tabs is-boxed is-medium">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === tabId ? "is-active" : ''}
              key={tab.id}
            >
              <NavLink
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <PageContent
          selectedTab={selectedTab}
        />
      </div>
    </>

  )
}