import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Post from './Post';
/* eslint-disable */
const Tabs = ({ tabs, match }) => (
  <>
    <div className="ui attached tabular menu inverted brown">
      {tabs.map(tab => (
        <NavLink
          key={tab.content}
          className="item"
          activeClassName="active"
          to={`${match.path}/${tab.content}`}
        >
          {tab.title}
        </NavLink>
      ))}
    </div>

    { match.isExact && (
      <div className="ui segment inverted thanks">
        <h3 className="thanks__title">Dear Reader!</h3>
        <div className="thanks__text">
          If you like posts press the button with a&nbsp;&nbsp;
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <div className="ui large image label">
            <i className="star icon" />
            Star
            <div className="detail">8</div>
          </div>
          &nbsp;&nbsp;on this&nbsp;&nbsp;
          <a
            href="https://github.com/Andreas-Just/react_tabs-with-router"
            target="_blank"
            className="ui large brown image label"
          >
            <i className="github alternate icon" />
            GitHub Page
          </a>
        </div>
      </div>
    )}

    <Route
      path={`${match.path}/:currentTabId`}
      render={({ match: { params } }) => (
        <div className="ui bottom attached segment active tab inverted">
          <Post
            {...tabs.find(
              tab => tab.content === +params.currentTabId,
            ).post}
          />
        </div>
      )}
    />
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape(
    { path: PropTypes.string },
  ).isRequired,
};

export default withRouter(Tabs);
