/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './tabs.css';

class Tabs extends React.Component {
  state = {
    isTab: 0,
  }

  handleClick = (id) => {
    this.setState({
      isTab: id,
    });
  }

  getChildren = (tabs, startIndex = 0, ChildElement) => {
    const { isTab } = this.state;

    return (
      tabs.map((item, index) => (
        <div
          key={`${index + startIndex}`}
          className={`${index + startIndex === isTab ? 'select' : ''}`}
          onClick={() => this.handleClick(index + startIndex)}
        >
          {
            ChildElement
              ? (
                <ChildElement
                  title={item.title}
                  id={item.id}
                >
                  {item.content}
                </ChildElement>
              )
              : item
          }
        </div>
      ))
    );
  }

  render() {
    const { tabs, children } = this.props;
    const startIndex = tabs ? tabs.length : 0;
    const checkChildren = children.length > 1 ? children : [children];

    return (
      <>
        <h1>Tabs</h1>

        <div className="tabs">
          {
            this.getChildren(tabs, 0, Tabs.Tab)
          }
          {
            this.getChildren(checkChildren, startIndex)
          }
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })),
};

Tabs.defaultProps = {
  children: [],
  tabs: [],
};

export default Tabs;

Tabs.Tab = ({ title, children, id }) => (
  <>
    <Link
      to={`/tabs/${id}`}
      className="tab--title"
    >
      {title}
    </Link>

    <div
      className="tab--content"
    >
      {children}
    </div>
  </>
);

Tabs.Tab.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  id: PropTypes.string.isRequired,
};

Tabs.Tab.defaultProps = {
  title: 'Title',
  children: '',
};
