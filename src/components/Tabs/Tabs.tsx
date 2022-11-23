import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams();

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames(
                { 'is-active': tab.id === tabId },
              )}
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

      {tabId ? (
        <div className="block" data-cy="tab-content">
          {tabs.map(tab => ((tab.id === tabId) ? tab.content : ''))}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};
