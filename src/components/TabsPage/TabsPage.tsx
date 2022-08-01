import { NavLink } from 'react-router-dom';

type Props = {
  tabsFromServer: Tab[],
};

export const TabsPage: React.FC<Props> = ({
  tabsFromServer,
}) => {
  return (
    <ul className="tabs is-toggle TabsPage">
      {tabsFromServer.map(tabFromServer => (
        <NavLink
          key={tabFromServer.id}
          to={`/tabs/${tabFromServer.id}`}
        >
          <li>{tabFromServer.title}</li>
        </NavLink>
      ))}
    </ul>
  );
};
