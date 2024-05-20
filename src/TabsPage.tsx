import { Tab } from './types/Tab';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

export const TabsPage = ({ tabs }: { tabs: Tab[] }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': tabId === tab.id })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {selectedTab ? (
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      ) : (
        <div data-cy="TabContent">Please select a tab</div>
      )}
    </div>
  );
};
