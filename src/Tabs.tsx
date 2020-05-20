import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Tabs.css';

type Props = {
  tabs: Tab[];
};

type Params = {
  id: string | undefined;
};

const Tabs: React.FC<Props> = ({ tabs }) => {
  const params: Params = useParams();

  return (
    <div>
      <h1>
        Tabs
      </h1>
      <div className="tab">
        {tabs.map(tab => (
          <div key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
              className="tab__link"
              activeClassName="tab__link-active"
            >
              {tab.title}
            </NavLink>
          </div>
        ))}
      </div>
      {params.id
      && (
        <div className="tab__text">
          {tabs.map(tab => (
            <div key={tab.id}>
              {tab.id === params.id
            && tab.content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tabs;
