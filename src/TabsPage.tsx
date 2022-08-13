import { Link, useOutletContext, useParams } from 'react-router-dom';

type Tab = {
  id: string;
  title: string;
  content: string;
};

export const TabsPage = () => {
  const { tabId } = useParams();
  const tabs = useOutletContext<Tab[]>();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="tab"
              key={tab.id}
              className={tabId === tab.id ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="tab-content">
        {tabId ? (
          <>
            {tabs.find(tab => tab.id === tabId)?.content}
          </>
        ) : (
          'Please select a tab'
        )}
      </div>
    </>
  );
};
