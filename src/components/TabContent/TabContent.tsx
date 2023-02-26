import React from 'react';

type Props = {
  tabContent: string | undefined;
};

export const TabContent: React.FC<Props> = ({ tabContent }) => (
  <div className="block" data-cy="TabContent">
    {tabContent || 'Please select a tab'}
  </div>
);
