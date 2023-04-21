import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';
import { TabsLink } from '../TabsLink';

type Props = {
  tabs: Tab[];
  selectedTabs?: string;
};

export const TabList: React.FC<Props> = ({ tabs, selectedTabs }) => {
  const tabContent = tabs
    .find(tab => tab.id === selectedTabs)?.content || 'Please select a tab';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const {
              id,
            } = tab;

            return (
              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': selectedTabs === id,
                })}
                key={id}
              >

                <TabsLink tab={tab} />
              </li>
            );
          })}

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </>
  );
};
