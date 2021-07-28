import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import classnames from 'classnames';
import { TabType } from '../../types';

import 'bulma';
import './TabsPage.scss';

export const TabsPage = ({ tabs }) => {
  const match = useRouteMatch();
  const selectedTabId = match.params.tabId;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classnames({ 'is-active': tab.id === selectedTabId })}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {selectedTabId
        ? (
          <article className="content">
            <p>{tabs.find(tab => tab.id === selectedTabId).content}</p>
          </article>
        )
        : (
          <article className="message is-danger">
            <div className="message-body">
              Please, select a tab
            </div>
          </article>
        )}
    </>
  );
};

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(TabType).isRequired,
};
