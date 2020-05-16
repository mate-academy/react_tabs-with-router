import React, { useEffect, useState } from 'react';
import {
  Route,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';

interface Props {
  tabs: Tab[];
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const match: Match = useRouteMatch();
  const [notMatch, setNotMatch] = useState(false);
  const visibleContent = tabs.find(tab => tab.id === match.params.id);

  useEffect(() => {
    if (!visibleContent && match.params.id) {
      setNotMatch(true);
    } else {
      setNotMatch(false);
    }
  }, [match.params.id, match]);

  return (
    <>
      {!notMatch && (
        <div className="wrap">
          <ul className="nav nav-tabs">
            {tabs.map(tab => (
              <li
                key={tab.id}
                className="nav-item"
              >
                <NavLink
                  className="nav-link"
                  to={`/tabs/${tab.id}`}
                  exact
                >
                  {tab.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Route
        path="/tabs"
        render={() => (
          <div className="content-container">
            {!notMatch
              ? (
                <p className="content">{visibleContent && visibleContent.content}</p>
              ) : (
                <p className="error">Hmm.. Your URL address is wrong :(</p>
              )}
          </div>
        )}
      />
    </>
  );
};
