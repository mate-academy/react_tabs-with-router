import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

const Tab = ({ id, title, content, match }) => (
  <>
    <div>
      <NavLink to={`${match.path}/${id}`}>{title}</NavLink>
    </div>
  </>
);

export default withRouter(Tab);

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
