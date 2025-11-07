import { useContext } from 'react';
import { Tab } from '../../types/Tab';
import cn from 'classnames';
import { TabsContext } from '../../store/TabsContext';
import { Link, useParams } from 'react-router-dom';

export const Tabs: React.FC = () => {
  const tabs: Tab[] = useContext(TabsContext);
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={cn({ 'is-active': tabId === tab.id })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      {!selectedTab ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      )}
    </>
  );
};
