import React from 'react';

type Props = {
  content: string,
};

export const TabContent: React.FC<Props> = ({ content }) => {
  return (
    <div className="block" data-cy="TabContent">
      { content }
    </div>
  );
};
