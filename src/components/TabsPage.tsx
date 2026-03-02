import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { useParams } from 'react-router-dom';

export default function TabsPage({ tabs }: { tabs: Tab[] }) {
  const { tabId } = useParams();
  const activeTab = tabs.find(t => t.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((t: Tab) => {
            return (
              <li
                key={t.id}
                data-cy="Tab"
                className={t.id === tabId ? 'is-active' : ''}
              >
                <Link to={`/tabs/${t.id}`}>{t.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!activeTab ? 'Please select a tab' : activeTab.content}
      </div>
    </>
  );
}
