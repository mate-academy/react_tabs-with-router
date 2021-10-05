import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import './TabsPage.scss';

export const TabsPage = ({ tabs }) => {
  const history = useHistory();
  const match = useRouteMatch('/tabs/:id?');
  const tabId = match.params.id;
  const selectedTab = tabs.find(tab => tab.id === tabId) || '';
  let indexTab = tabs.findIndex(tab => tab.id === tabId);

  const [interv, setInterv] = useState();
  const [isStart, setIsStart] = useState(false);

  function rotation() {
    indexTab += 1;

    if (indexTab >= tabs.length) {
      indexTab = 0;
    }

    return history.push(`/tabs/${tabs[indexTab].id}`);
  }

  const start = () => {
    if (!tabId) {
      history.push('/tabs/tab-1');
      indexTab += 1;
    }

    setInterv(setInterval(rotation, 1000));
    setIsStart(true);
  };

  const stop = () => {
    clearInterval(interv);
    setIsStart(false);
  };

  useEffect(() => function cleanup() {
    if (!history.location.pathname.includes('/tabs/')) {
      stop();
    }
  });

  return (
    <div className="tabs-page">
      <h1 className="title">Tabs page</h1>
      {(isStart) ? (
        <button
          type="button"
          onClick={stop}
          className="button"
        >
          Stop tabs rotation
        </button>
      ) : (
        <button
          type="button"
          onClick={start}
          className="button"
        >
          Start tabs rotation
        </button>
      )}
      <div className="buttons-container">
        {tabs.map(tab => (
          ((tabId === tab.id) ? (
            <button
              key={tab.id}
              type="button"
              onClick={stop}
              className="button is-link"
            >
              {tab.title}
            </button>
          ) : (
            <Link
              key={tab.id}
              to={`/tabs/${tab.id}`}
              onClick={stop}
              className="button"
            >
              {tab.title}
            </Link>
          ))
        ))}
      </div>
      <div className="content-container">
        {(selectedTab.length === 0) ? (
          <p>Please select a tab</p>
        ) : (
          <p>{selectedTab.content}</p>
        )}
      </div>
    </div>
  );
};

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
