import { Link, Navigate, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import classNames from 'classnames';

export const TabsPage: React.FC = () => {
  const { tabID } = useParams();

  const tabs: Tab[] = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  if (!tabs.find(tab => tab.id === tabID) && tabID !== undefined) {
    return <Navigate to="/tabs" replace />;
  }

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({ 'is-active': tab.id === tabID })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabID ? (
            <>{tabs.find(tab => tab.id === tabID)?.content}</>
          ) : (
            <>{'Please select a tab'}</>
          )}
        </div>
      </div>
    </div>
  );
};
