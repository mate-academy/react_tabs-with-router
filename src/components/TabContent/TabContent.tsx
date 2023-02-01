import React from 'react';

type Props = {
  content: string | undefined;
};

export const TabContent: React.FC<Props> = ({ content }) => (
  <div className="block" data-cy="TabContent">
    {content || 'Please select a tab'}
  </div>
);
