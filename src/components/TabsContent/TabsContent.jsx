import React from 'react';
import PropTypes from 'prop-types';
import './TabsContent.scss';

export const TabsContent = ({ content }) => (
  <p className="content">{content}</p>
);

TabsContent.propTypes = {
  content: PropTypes.string.isRequired,
};
