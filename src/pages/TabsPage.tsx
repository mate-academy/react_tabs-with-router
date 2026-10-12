import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Tab = {
  id: string;
  title: string;
  content: string;
};

export const TabsPage = ({ tabs }: { tabs: Tab[] }) => {
  const { tabId } = useParams();

  document.title = 'Tabs page';
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tabId === tab.id })}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
