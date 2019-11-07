import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const Tab = ({ tab, match, history }) => (
  <>
    <Button
      type="button"
      onClick={() => (
        history.push(`${match.path}/${tab.id}`)
      )}
    >
      {tab.title}
    </Button>
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
