import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();
  const selectedTab = useMemo(
    () => tabs.find(tab => tab.id === tabId),
    [tabId, tabs],
  );

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tabId === tab.id })}
              data-cy="Tab"
              key={tab.id}
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

      <div
        className="block"
        data-cy="TabContent"
      >
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
