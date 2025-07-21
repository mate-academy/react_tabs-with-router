import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabsContext } from '../store/TabsContext';

export const Tabs = () => {
  const { tabs, activeTab, setActiveTab } = useContext(TabsContext);
  const { tabId } = useParams();

  return (
    <>
      <div className="tabs is-boxed" role="tablist">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              role="presentation"
              className={tabId === tab.id ? 'is-active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              <Link
                className="tab"
                to={`../${tab.id}`}
                data-cy="TabLink"
                role="tab"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent" role="tabpanel">
        {tabs.find(tab => tab.id === tabId)
          ? activeTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
