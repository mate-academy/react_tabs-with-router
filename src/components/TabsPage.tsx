import { NavLink, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <div className="container">
      <h1>Tabs Page</h1>
      <nav className="navbar">
        {tabs.map(el => (
          <NavLink
            className="nav-link"
            to={`/tabs/${el.id}`}
            activeClassName="active"
            key={el.id}
          >
            {el.title}
          </NavLink>
        ))}
      </nav>

      {tabId
        ? <div className="tab-content">{tabs.find(el => el.id === tabId)?.content}</div>
        : <div>No tab selected</div>}
    </div>
  );
};
