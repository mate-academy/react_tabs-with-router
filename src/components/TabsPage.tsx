import { useContext } from 'react';
import { TabsAppContext } from './TabsAppContext';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

export const TabsPage = () => {
  const { tabs } = useContext(TabsAppContext);
  const { tabId } = useParams();
  const selectedId = tabId;
  const selectedTab = tabs.find(tab => tab.id === selectedId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={classNames({
                  'is-active': tab.id === selectedId,
                })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
