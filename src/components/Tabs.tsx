import { Link, useParams } from 'react-router-dom';
import tabsFromServer from '../api/tabs.json';

export const Tabs = () => {
  const { tabId } = useParams();

  const currTab = tabsFromServer.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabsFromServer.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={currTab?.id === tab.id ? 'is-active' : ''}
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
      <div className="block" data-cy="TabContent">
        {
          currTab
            ? (
              currTab.content
            )
            : 'Please select a tab'
        }
      </div>
    </>
  );
};
