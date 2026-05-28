import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(t => t.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {!selectedTab ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          {tabs.find(tab => tab.id === tabId)?.content}
        </div>
      )}
    </>
  );
};
