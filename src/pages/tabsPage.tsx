import { Link, useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';

export const TabsPage = () => {
  const params = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={params.tabId === tab?.id ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab?.id === params?.tabId)?.content ??
          'Please select a tab'}
      </div>
    </>
  );
};
