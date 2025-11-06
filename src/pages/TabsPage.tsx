import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { useContext } from 'react';
import { TabContext } from '../store/TabsContext';

const TabsPage = () => {
  const tabs = useContext(TabContext);
  const { tabId } = useParams();

  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={cn({
                  'is-active': tab.id === tabId,
                })}
              >
                <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {activeTab ? <p>{activeTab.content}</p> : <p>Please select a tab</p>}
        </div>
      </div>
    </>
  );
};

export default TabsPage;
