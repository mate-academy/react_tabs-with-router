/* eslint-disable no-console */
import { Link, useLocation } from 'react-router-dom';
import { useTabs } from '../context/ContextCreate';

export const SectionTabs: React.FC = () => {
  const location = useLocation();
  const tabs = useTabs();

  return (
    <div className="section">
      <div className="container">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ id, title }) => {
              return (
                <li
                  key={id}
                  data-cy="Tab"
                  className={
                    location.pathname === `/tabs/${id}` ? 'is-active' : ''
                  }
                >
                  <Link to={`/tabs/${id}`}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
