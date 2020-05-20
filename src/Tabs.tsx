import React, { useMemo } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
};

const Tabs: React.FC<Props> = ({ tabs }) => {
  const params: Params = useParams();

  const visibleContent = useMemo(() => {
    return tabs.find(tab => tab.id === params.id)?.content;
  }, [tabs, params.id]);

  return (
    <div className="tabs">
      {tabs.map((tab: Tab) => (
        <React.Fragment key={tab.id}>
          <NavLink
            to={`/tabs/${tab.id}`}
            exact
            className="tabs__link"
          >
            {tab.title}
          </NavLink>
        </React.Fragment>
      ))}
      <div className="tabs__content">
        {visibleContent}
      </div>
    </div>
  );
};

export default Tabs;
