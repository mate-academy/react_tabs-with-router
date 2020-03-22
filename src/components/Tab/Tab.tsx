import React, { FC } from 'react';

interface Props {
  content: string;
}

export const Tab: FC<Props> = ({ content }) => {
  return (
    <>
      <h3 className="content">{content}</h3>
    </>
  );
};
