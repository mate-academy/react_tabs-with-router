import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';

class Tabs extends React.Component {
  static Tab = ({ children }) => children ;

  componentDidMount() {
  }

  render() {
    let { children } = this.props;
    const { match } = this.props;

    children = children.length ? children : [children];

    return (
      <div className="tabs">
        <ul className="tabs-links">
          {
            children.map((child) => {
              const link = `${child.props.title.replace(' ', '-')}`;

              const classes = classNames({
                'tabs-links__item': true,
              });

              return (
                <li className={classes}>
                  <NavLink
                    isActive={() => match.params.title === link}
                    activeClassName="tabs-links__item--selected"
                    to={link}
                  >
                    {child.props.title}
                  </NavLink>
                </li>
              );
            })
          }
        </ul>

        <div className="tabs-content">
          {
            children.find((child) => {
              const title = match.params.title || '';

              return (
                child.props.title === title.replace('-', ' ')
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
