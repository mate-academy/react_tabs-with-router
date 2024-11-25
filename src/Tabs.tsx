import { Link, useParams } from 'react-router-dom';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const currentTab = tabs.find(tab => tab.id === tabId) || 0;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={tabId === tab.id ? 'is-active' : ''}
              key={tab.id}
            >
              <Link to={`${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {currentTab !== 0 ? (
        <div className="block" data-cy="TabContent">
          {currentTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
