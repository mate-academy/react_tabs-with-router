import React from 'react';

import './TabCard.scss';

type Props = {
  title: string;
  index: number;
  isActive: boolean;
  selectTab: (index: number) => void;
};

export const TabCard: React.FC<Props> = ({
  title, index, selectTab,
}) => {
  return (
    <button
      type="button"
      onClick={() => selectTab(index)}
    >
      <p>
        {title}
      </p>
    </button>
  );
};
