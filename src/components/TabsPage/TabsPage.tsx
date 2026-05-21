import { Link, useParams } from 'react-router-dom';
import { tabs } from '../../api/Tabs';
import classNames from 'classnames';
import { useMemo } from 'react';

export const TabsPage = () => {
  const { tabId } = useParams();

  const activeTab = useMemo(() => {
    return tabs.find(tab => tab.id === tabId);
  }, [tabId]);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  key={tab.id}
                  data-cy="Tab"
                  className={classNames('', { 'is-active': tabId === tab.id })}
                >
                  <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {activeTab ? activeTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
