import React from 'react';
import PropTypes from 'prop-types';

export const ShowTab = ({ item }) => {
  const [tab] = item;

  return (
    <>
      <p>{tab.content}</p>
    </>
  );
};

ShowTab.propTypes = {
  item: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
