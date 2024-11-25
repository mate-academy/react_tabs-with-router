import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const Tabs: React.FC = () => {
  const { tabId } = useParams();
  const showSelectText = tabId === undefined || parseInt(tabId.at(-1)!) > 3;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          <li
            data-cy="Tab"
            className={tabId?.at(-1) === '1' ? 'is-active' : ''}
          >
            <Link to={`tab-1`}>Tab 1</Link>
          </li>
          <li
            data-cy="Tab"
            className={tabId?.at(-1) === '2' ? 'is-active' : ''}
          >
            <Link to="tab-2">Tab 2</Link>
          </li>
          <li
            data-cy="Tab"
            className={tabId?.at(-1) === '3' ? 'is-active' : ''}
          >
            <Link to="tab-3">Tab 3</Link>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {showSelectText ? 'Please select a tab' : `Some text ${tabId.at(-1)}`}
      </div>
    </>
  );
};
