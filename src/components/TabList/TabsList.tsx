import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabs: string | null;
};

export const TabList: React.FC<Props> = ({ tabs, selectedTabs }) => {
  const selectedTabId = tabs.find(tab => tab.id === selectedTabs);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const {
              id,
              title,
            } = tab;

            return (
              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': selectedTabId?.id === id,
                })}
                key={id}
              >
                <Link to={`/tabs/${id}`}>
                  {title}
                </Link>
              </li>
            );
          })}

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabId?.content || (
          'Please select a tab'
        )}
      </div>
    </>
  );
};
