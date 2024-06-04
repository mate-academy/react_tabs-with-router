import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';

interface TabsPageProps {
  tabs: Tab[];
}

export const TabsPage: React.FC<TabsPageProps> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectebTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tabId === tab.id ? 'is-active' : ''}
            >
              <Link to={tab.id}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectebTab ? selectebTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
