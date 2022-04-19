import { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Tab } from './type/Tabs';

interface Props {
  tabs: Tab[];
}

export const Tabs: FC<Props> = ({ tabs }) => {
  const params = useParams();

  return (
    <div className="tabs-container">
      <div className="tabs is-small ">
        <ul>
          {tabs.map(tab => (
            <>
              <NavLink
                key={tab.id}
                to={`/tabs/${tab.id}`}
                className="button"
              >
                {tab.title}
              </NavLink>
            </>
          ))}
        </ul>
      </div>
      <h4>
        {tabs.find(tab => tab.id === params.id)?.content || 'Chose your tabs'}
      </h4>
    </div>
  );
};
