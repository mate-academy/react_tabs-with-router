import { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { addIsActiveClass } from '../Components/Navigation';

export const TabsPage: FC<Props> = ({ tabs }) => {
  const params = useParams();

  const { id } = params;

  return (
    <div className="tabs-container">
      <div className="tabs is-small ">
        <ul>
          {tabs.map(tab => (
            <>
              <NavLink
                key={tab.id}
                to={`/tabs/${tab.id}`}
                className={addIsActiveClass}
              >
                {tab.title}
              </NavLink>
            </>
          ))}
        </ul>
      </div>
      <p>{tabs.find(tab => tab.id === id)?.content || 'Please select a tab'}</p>
    </div>
  );
};

interface Props {
  tabs: Tab[];
}

interface Tab {
  id: string,
  title: string,
  content: string,
}
