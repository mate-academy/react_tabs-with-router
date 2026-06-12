// src/components/TabsComponent.tsx
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';
import { Tab } from '../types/Tab';

export default function TabsComponent() {
  const { tabId } = useParams<{ tabId?: string }>();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab: Tab) => {
          const active = tab.id === tabId;

          return (
            <li
              key={tab.id}
              data-cy="Tab"
              className={active ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`} data-cy={`TabLink-${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
