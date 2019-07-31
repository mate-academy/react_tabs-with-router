import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Tabs extends React.Component {
  componentDidMount() {
    this.props.handleClick(+this.props.match.params.tabId);
  }

  render() {
    return (
      <>
        <div>
          {this.props.children.map(child => (
            <Link to={`/tabs/${child.props.id}`} key={child.props.id}>
              <button
                type="button"
                onClick={() => this.props.handleClick(child.props.id)}
                className={(this.props.currentTab === child.props.id)
                  ? 'button active'
                  : 'button'}
              >
                {child.props.title}
              </button>
            </Link>
          ))}
        </div>
        <div className="content">
          {this.props.children[this.props.currentTab - 1]}
        </div>
      </>
    );
  }
}

Tabs.Tab = ({ children }) => <div>{children}</div>;

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentTab: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

Tabs.Tab.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Tabs;
