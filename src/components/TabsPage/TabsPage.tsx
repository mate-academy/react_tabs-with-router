import { NavLink, useParams } from 'react-router-dom';
import { Tabs } from '../../react-app-env';

type Props = {
  tabs: Tabs[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="has-text-centered is-size-3">
        Tabs
      </h1>

      <div className="tabs is-centered is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <NavLink to={`/tabs/${tab.id}`}>
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="has-text-centered">
        {activeTab !== undefined
          ? activeTab.content
          : 'Please, select a tab'}
      </div>
    </>
  );
};
