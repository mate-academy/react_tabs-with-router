import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable */
const Post = ({ title, body }) => (
  <>
    <h3>{title}</h3>
    {body.split('\n').map((pars, idx) => (
      <p key={idx}>{pars}</p>
    ))}
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
