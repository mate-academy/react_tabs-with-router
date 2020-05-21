/* eslint-disable react/no-array-index-key */
import React from 'react';

const Post: React.FC<TabIF> = ({ post }) => {
  if (!post) {
    return null;
  }

  return (
    <>
      <h3>{post.title}</h3>
      {post.body.split('\n').map((pars, idx) => (<p key={idx}>{pars}</p>))}
    </>
  );
};

export default Post;
