import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import '../style.scss';

interface Props {
  tabs: Tab[];
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="title">Tabs page</h1>

          <div className="tabs is-boxed">
            <ul>
              {tabs.map(tab => (
                <li
                  key={tab.id}
                  data-cy="Tab"
                  className={tab.id === tabId ? 'is-active' : ''}
                >
                  <NavLink to={tab.id}>{tab.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
