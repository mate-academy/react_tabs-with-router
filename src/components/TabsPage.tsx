import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../api';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTabId = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li
                data-cy="Tab"
                className={classNames(
                  { 'is-active': tab.id === tabId },
                )}
              >
                <Link to={tab.id}>{tab.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTabId || 'Please select a tab'}
      </div>
    </>
  );
};
