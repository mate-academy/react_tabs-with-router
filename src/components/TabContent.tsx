import React from 'react';

interface Props {
  activeTabContent: string | undefined;
}

export const TabContent: React.FC<Props> = ({ activeTabContent }) => {
  return (
    <div className="block" data-cy="TabContent">
      {activeTabContent ? activeTabContent : 'Please select a tab'}
    </div>
  );
};
