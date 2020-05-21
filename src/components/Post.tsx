import React from 'react';

interface Props {
  post: PostIF | null;
}

const Post: React.FC<Props> = (props) => {
  if (!props?.post) {
    return null;
  }

  const { post } = props;

  return (
    <>
      <h3>{post.title}</h3>
      {post.body.split('\n').map((pars: string, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={idx}>{pars}</p>
      ))}
    </>
  );
};

export default Post;
