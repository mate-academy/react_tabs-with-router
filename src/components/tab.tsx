import React from 'react';

interface Props {
  content: string;
}

export const Tab: React.FC<Props> = ({ content }) => {
  return <>{content}</>;
};
