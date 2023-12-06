import { Link, useParams } from 'react-router-dom';

type Tab = {
  id: string,
  title: string,
  content: string,
};

interface T {
  tabs: Tab[]
  // setTabContent: Dispatch<SetStateAction<string>>
}

export const TabsPage: React.FC<T> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);


  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({
            id,
            title,
          }) => (
            <li
              data-cy="Tab"
              className={selectedTab?.id === id ? 'is-active' : ''}
              key={id}
            >
              {/* onClick={() => setTabContent(content)} */}
              <Link to={`/tabs/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
