import React, {
  useContext,
  useEffect,
} from 'react';
import classNames from 'classnames';
import {
  Link,
  useParams,
} from 'react-router-dom';
import { ACTIONS, StateContext } from './TabContext';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const { dispatch } = useContext(StateContext);
  const { tabId } = useParams();
  /* eslint-disable */
  const selectedTabId = tabId ? tabId : '';
  const data = tabs.find(tab => tab.id === selectedTabId)

  useEffect(
    () => {
      if (!data) {
        dispatch({ type: ACTIONS.SET_CONTENT, payload: 'Please select a tab' });
      } else {
        dispatch({ type: ACTIONS.SET_CONTENT, payload: data.content });
      }
    },
    [tabId]);

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li
            className={classNames({
              'is-active': selectedTabId === tab.id,
            })}
            key={tab.id}
            data-cy="Tab"
          >
            <Link
              to={`/tabs/${tab.id}`}
              data-cy="TabLink"
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
