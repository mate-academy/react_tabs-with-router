import { Link, useParams } from 'react-router-dom';

import classNames from 'classnames';
import { useContext } from 'react';
import { TabsContext } from '../store/TabsContext';

export const Tabs = () => {
  const { tabs } = useContext(TabsContext);
  const { tabId } = useParams();
  let currentTab;

  if (tabId) {
    currentTab = tabs.find(tab => tab.id === tabId);
  }

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === tabId,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!currentTab ? 'Please select a tab' : currentTab.content}
      </div>
    </>
  );
};
