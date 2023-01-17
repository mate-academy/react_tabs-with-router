import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams();

  const selectedTabId = useMemo(() => {
    return tabs.find(tab => tab.id === tabId);
  }, [tabId]);

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

      <div className="block" data-cy="TabContent">
        {selectedTabId ? (
          selectedTabId.content
        ) : (
          'Please select a tab'
        )}
      </div>
    </div>
  );
};
