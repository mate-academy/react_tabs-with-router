import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TabItem } from '../TabItem/index';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: FC = () => {
  const { tabId = '' } = useParams();

  const selectedTab = tabs.find(({ id }) => id === tabId)?.content;

  return (
    <>
      <h1 className="title">
        Tabs page
      </h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = tab.id === tabId;

            return (
              <TabItem
                key={tab.id}
                tab={tab}
                isSelected={isSelected}
              />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab || 'Please select a tab'}
      </div>
    </>
  );
};
