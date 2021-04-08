import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

export const TabsPage: React.FC = ({ match }: any) => {
  const selectedTabId: string = match.params.tabId || '0';

  return (
    <>
      {!selectedTabId && <h3>Please select a tab</h3>}
      <ul className="list">
        {tabs.map(tab => (
          <React.Fragment key={tab.id}>
            <Link
              to={`/tabs/${tab.id}`}
              className={ClassNames('button',
                {
                  'is-light': selectedTabId !== tab.id,
                  'is-dark': selectedTabId === tab.id,
                })}
            >
              <p>{tab.title}</p>
            </Link>
            <div
              className="list__content"
            >
              {selectedTabId === tab.id && tab.content}
            </div>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};
