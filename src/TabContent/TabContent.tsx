import React from 'react';

type Props = {
  text: string
};

export const TabContent: React.FC<Props> = ({ text }) => {
  return (
    <div className="block" data-cy="TabContent">
      {text}
    </div>
  );
};
