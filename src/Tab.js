import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Tab = ({ tab, match, history }) => (
  <>
    <button
      type="button"
      onClick={() => (
        history.push(`${match.path}/${tab.id}`)
      )}
    >
      {tab.title}
    </button>
  </>
);

Tab.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Tab);
