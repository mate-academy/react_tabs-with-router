import { useContext } from 'react';
import { TabsContext } from '../context/TabsProvider';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

export const TabsPage = () => {
  const { tabId } = useParams();
  const tabs = useContext(TabsContext);
  const selectedTab = tabs.find(tab => tab.id === tabId);
 
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li data-cy="Tab" className={cn({"is-active" : tabId === tab.id})} key={tab.id}>
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
