import { Link } from 'react-router-dom';
import { tabs } from '../types/Tab';

export function TabsList({ activeId }: { activeId?: string }) {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(t => (
          <li
            key={t.id}
            data-cy="Tab"
            className={activeId === t.id ? 'is-active' : ''}
          >
            <Link to={`/tabs/${t.id}`}>{t.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
