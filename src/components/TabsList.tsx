import { useContext } from 'react';
import { TabsProvider } from './TabsContext';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

export const TabsList = () => {
  const tabs = useContext(TabsProvider);
  const { tabId } = useParams();
  const selectedTab = tabId || 'tab-0';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': selectedTab === tab.id })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {!tabs.some(tab => tab.id === selectedTab)
          ? 'Please select a tab'
          : tabs.find(tab => tab.id === selectedTab)?.content}
      </div>
    </>
  );
};
