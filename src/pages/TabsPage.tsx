import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';

export default function TabsPage() {
  const { pathname } = useLocation();
  const { tabId } = useParams();

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul className="tabs-list">
            {tabs.map(t => {
              const isActive = pathname.startsWith('/tabs') && tabId === t.id;

              return (
                <li
                  key={t.id}
                  data-cy="Tab"
                  className={isActive ? 'is-active' : ''}
                >
                  <Link to={`/tabs/${t.id}`}>{t.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Outlet />
      </div>
    </section>
  );
}
