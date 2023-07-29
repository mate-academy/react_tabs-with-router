import { Link, Route, Routes } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = ({ selectedTabId }) => {
  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={selectedTabId === tab.id ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Routes>
        {tabs.map((tab) => (
          <Route
            key={tab.id}
            path={`${tab.id}`}
            element={
              <div className="block" data-cy="TabContent">{tab.content}</div>
            }
          />
        ))}
        <Route
          path="*"
          element={(
            <div className="block" data-cy="TabContent">
              Please select a tab
            </div>
          )}
        />
      </Routes>
    </>
  );
};
