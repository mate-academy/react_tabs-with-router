import { Link, useParams, Outlet } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
}
export const TabsPage = ({ tabs }: Props) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(t => {
            return (
              <li
                key={t.id}
                data-cy="Tab"
                className={tabId === t.id ? 'is-active' : ''}
              >
                <Link to={`${t.id}`}>{t.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Outlet></Outlet>
    </>
  );
};

{
}
