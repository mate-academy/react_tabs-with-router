import classNames from 'classnames';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: Tab['id'];
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
}) => {
  const selectedTab = useMemo(() => {
    return tabs.find(tab => tab.id === selectedTabId);
  }, [selectedTabId]);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = selectedTabId === tab.id;

            return (
              <li
                data-cy="Tab"
                className={classNames({ 'is-active': isSelected })}
                key={tab.id}
              >
                <Link
                  to={`../${tab.id}`}
                >
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab !== undefined
          ? selectedTab.content
          : ('Please select a tab')}
      </div>
    </>
  );
};
