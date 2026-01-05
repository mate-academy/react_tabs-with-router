import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface TabsPageProps {
  tabs: Tab[];
}

export const TabsPage = ({ tabs }: TabsPageProps) => {
  const { tabId } = useParams();
  const activeTab = tabId ? tabs.find(tab => tab.id === tabId) : null;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
