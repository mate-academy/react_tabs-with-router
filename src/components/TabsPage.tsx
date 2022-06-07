import { NavLink, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab [],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const params = useParams();

  return (
    <>
      <ul className="nav nav-pills justify-content-center">
        {tabs.map(tab => (
          <NavLink
            key={tab.id}
            to={`/tabs/${tab.id}`}
            className={({ isActive }) => (
              `p-2 m-2 nav-link text-dark border ${isActive && 'active text-white'}`
            )}
          >
            {tab.title}
          </NavLink>
        ))}
      </ul>
      <div className="m-2 p-2">
        {
          tabs.find(tab => tab.id === params.id)?.content
        || 'Please select a tab'
        }
      </div>
    </>
  );
};
