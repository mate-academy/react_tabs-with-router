import classnames from 'classnames';
import React from 'react';
import { useParams } from 'react-router-dom';
import { TabLink } from '../../components/TabLink';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(({ id }) => id === tabId);

  return (
    <div className="container">
      <h1 className="title">Title page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id } = tab;
            const isSelectedTab = id === selectedTab?.id;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classnames({
                  'is-active': isSelectedTab,
                })}
              >
                <TabLink tab={tab} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
