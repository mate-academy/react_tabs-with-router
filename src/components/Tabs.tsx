import clsx from 'clsx';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const params = useParams();

  const tab = tabs.find(tabItem => tabItem.id === params.tabId);

  const tabContent = tab?.content ? tab.content : false;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tabItem => {
            return (
              <li
                data-cy="Tab"
                className={clsx(params.tabId === tabItem.id && 'is-active')}
                key={tabItem.id}
              >
                <Link to={`/tabs/${tabItem.id}`}>{tabItem.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent ? <p>{tabContent}</p> : <p>Please select a tab</p>}
      </div>
    </>
  );
};
