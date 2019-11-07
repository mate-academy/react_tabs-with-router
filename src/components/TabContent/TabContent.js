import React from 'react';
import PropTypes from 'prop-types';

const TabContent = (props) => {
  const { text } = props;

  return (
    <div className="tab-content">
      {text}
    </div>
  );
};

TabContent.defaultProps = {
  text: '',
};

TabContent.propTypes = {
  text: PropTypes.string,
};

export default TabContent;
