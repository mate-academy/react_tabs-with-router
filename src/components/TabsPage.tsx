import { useParams, Link } from 'react-router-dom';
import { Tab } from '../types/Tab';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
};
export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabId })}
              key={tab.id}
            >
              {activeTab ? (
                <Link to={`../${tab.id}`}>{tab.title}</Link>
              ) : (
                <Link to={`${tab.id}`}>{tab.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {activeTab ? (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
