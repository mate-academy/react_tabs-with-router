import cn from 'classnames';
import { Tab } from '../../types/Tab';
import { Link, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const id = tabId ? tabId.replace('tab-', '') : '';
  const activeTabId = +id;
  const activeTab = tabs.find(
    tab => +tab.id.replace('tab-', '') === activeTabId,
  );

  return (
    <div data-cy="TabsComponent">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({
                'is-active': activeTabId === +tab.id.replace('tab-', ''),
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink" id={tab.id}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {activeTab ? (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};
