import { Link, useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';

export const Tabs = () => {
  const { tabId } = useParams();

  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          { tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === currentTab?.id ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
