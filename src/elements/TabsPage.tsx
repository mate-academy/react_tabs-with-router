import classNames from 'classnames';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('');

  const tabId = (stringId: string) => {
    return +stringId.slice(-1);
  };

  return (
    <div className="section">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames(
                '',
                { 'is-active': tabId(selectedTabId) === tabId(tab.id) },
              )}
            >
              <Link
                to={`${tab.id}`}
                onClick={() => setSelectedTabId(tab.id)}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Routes>
        <Route
          path="/"
          element={(
            <div className="block" data-cy="tab-content">
              Please select a tab
            </div>
          )}
        />
        <Route
          path={`${selectedTabId}`}
          element={(
            <p className="title">
              {selectedTabId}
            </p>
          )}
        />
        <Route
          path="/tabs/*"
          element={<NotFoundPage />}
        />
      </Routes>
    </div>
  );
};
