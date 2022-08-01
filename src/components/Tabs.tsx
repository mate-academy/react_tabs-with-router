import classNames from 'classnames';
import { Link, Outlet, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <div className="tabs">
        <ul>
          {tabs.map((tab) => (
            <li
              className={classNames(
                { 'is-active': tab.id === tabId },
              )}
              key={tab.id}
            >
              <Link
                to={tab.id}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};
