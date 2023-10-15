import { Link, Outlet, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => {
              const { id, title } = tab;

              return (
                <li
                  className={cn({ 'is-active': id === tabId })}
                  data-cy="Tab"
                  key={id}
                >
                  <Link
                    to={`/tabs/${id}`}
                    data-cy="TabLink"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabId ? (
            <Outlet />
          ) : 'Please select a tab'}
        </div>
      </div>
    </>
  );
};
