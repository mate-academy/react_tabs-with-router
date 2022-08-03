import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(({ id }) => id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="tab"
              className={classNames({
                'is-active': tab.id === tabId,
              })}
              key={tab.id}
            >
              <Link
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="tab-content"
      >
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
