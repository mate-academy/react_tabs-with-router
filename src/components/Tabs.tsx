import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const location = useLocation();

  const activeTabId = location.pathname.split('/').pop() || tabs[0].id;
  const currentTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                data-cy="Tab"
                className={classNames({ 'is-active': activeTabId === tab.id })}
                key={tab.id}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {currentTab?.content || 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
