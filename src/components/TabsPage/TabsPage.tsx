import { Link, useParams } from 'react-router-dom';
import Tab from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

const TabsPage = ({ tabs } : Props) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="tab"
              className={tab.id === tabId ? 'is-active' : ''}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="tab-content">
        {selectedTab ? (
          selectedTab?.content
        ) : (
          'Please select a tab'
        )}
      </div>
    </>
  );
};

export default TabsPage;
