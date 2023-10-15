import { Link, useParams } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Tab } from '../types/Tab';

export const Tabs = ({ tabs }: { tabs: Tab[] }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
