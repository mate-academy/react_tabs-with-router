import React from 'react';
import classNames from 'classnames';
import { Tab } from '../Tab/tab';

type Props = {
  selectedTabId: string,
};

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsList: React.FC<Props> = ({
  selectedTabId,
}) => {
  const selectedTabContent = tabs.find(
    tab => selectedTabId === tab.id,
  )?.content;

  const isExistTabId = tabs.some(tab => selectedTabId === tab.id);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': selectedTabId === tab.id,
              })}
            >
              <Tab id={tab.id} title={tab.title} />
            </li>
          ))}
        </ul>
      </div>

      {selectedTabContent && (
        <div className="block" data-cy="TabContent">
          { selectedTabContent }
        </div>
      )}

      {!isExistTabId && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
