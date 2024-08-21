import classNames from 'classnames';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const content = tabs.find(({ id }) => id === tabId)?.content;

  const text = tabId ? content : 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ title, id }) => {
            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames({
                  'is-active': id === tabId,
                })}
              >
                <NavLink to={`/tabs/${id}`}>{title}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {text}
      </div>
    </>
  );
};
