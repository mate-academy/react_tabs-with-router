import { NavLink } from 'react-router-dom';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({
  tabs,
}) => {
  return (
    <ul className="tabs is-toggle TabsPage">
      {tabs.map(tab => (
        <NavLink
          key={tab.id}
          to={`/tabs/${tab.id}`}
        >
          <li>{tab.title}</li>
        </NavLink>
      ))}
    </ul>
  );
};
