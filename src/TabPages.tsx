import React, { useState, useEffect } from 'react';
import {
  NavLink,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import './App.scss';

interface Tabs {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: Tabs[];
};

export const TabPages: React.FC<Props> = ({ tabs }) => {
  const [text, setText] = useState('');
  const location = useLocation();

  useEffect(() => {
    const getKey = location.pathname.split('/')[2];

    if (getKey) {
      const firstText = tabs.filter(elem => elem.id === getKey)[0].title;

      setText(firstText);
    }
  }, []);

  return (
    <>
      <div>
        {tabs.map(elem => {
          return (
            <NavLink
              to={`/tabs/${elem.id}`}
              key={elem.id}
              type="button"
              onClick={() => setText(elem.title)}
              className="tab"
              activeClassName="tab__active"
            >
              {elem.title}
            </NavLink>
          );
        })}
      </div>

      <Switch>
        <Route path="/tabs" exact>
          <p>Please select a tab</p>
        </Route>

        <p>{text}</p>
      </Switch>
    </>
  );
};
