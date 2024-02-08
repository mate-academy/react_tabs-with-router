import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../variables/Tabs';

export const TabsPage = () => {
  const { tabId } = useParams();

  const currentTab = tabs.find((tab => tab.id === tabId));

  const tabsIds = tabs.map(tab => tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="section">
        <div className="container">

          <div className="tabs is-boxed">
            <ul>
              {tabs.map(tab => (
                <li
                  key={tab.id}
                  data-cy="Tab"
                  className={classNames({ 'is-active': tabId === tab.id })}
                >
                  <Link to={`../${tab.id}`}>{tab.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {(tabId && tabsIds.includes(tabId)) ? (
            <div className="block" data-cy="TabContent">
              {currentTab?.content}
            </div>
          ) : (
            <div className="block" data-cy="TabContent">
              Please select a tab
            </div>
          )}
        </div>
      </div>
    </>
  );
};
