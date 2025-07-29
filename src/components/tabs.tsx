import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  t: Tab[];
}

export const Tabs: React.FC<Props> = ({ t }) => {
  const { tabId } = useParams();

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {t.map(some => (
            <li
              key={some.id}
              data-cy="Tab"
              className={`${String(some.id) === tabId ? 'is-active' : ''}`}
            >
              <NavLink to={some.id}>{some.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </>
  );
};
