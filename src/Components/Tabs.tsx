import { Link, useParams } from 'react-router-dom';
import { useTabs } from '../Store/TabsContext';
import cn from 'classnames';

export const TabsList = () => {
  const tabs = useTabs();
  const { tabId } = useParams();

  const activeTab = tabs.find(t => t.id === tabId) || null;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === activeTab?.id })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : <p>Please select a tab</p>}
      </div>
    </>
  );
};
