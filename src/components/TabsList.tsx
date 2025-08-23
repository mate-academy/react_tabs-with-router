import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabsContext } from '../TabsContext/TabsContext';
import { TabsContent } from './TabsContent';

export const TabsList = () => {
  const tabs = useContext(TabsContext);
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={tab.id === selectedTab?.id ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {selectedTab ? (
        <TabsContent tab={selectedTab} />
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
