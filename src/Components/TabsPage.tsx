import { NavLink, useParams } from 'react-router-dom';

interface Tabs {
  id: string,
  title: string,
  content: string
}

interface Props {
  tabs: Tabs[];
}

const TabsPage:React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const neededTab = tabs.find(tab => tab.id === tabId);
  const isTabValid = neededTab !== undefined;

  return (
    <div className="section">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id}>
              <NavLink
                to={`/tabs/${tab.id}`}
                className={() => (
                  tab.id === tabId ? ('is-active') : ('not-active')
                )}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {isTabValid ? (neededTab.content)
          : ('Please, select a tab')}
      </div>
    </div>
  );
};

export default TabsPage;
