import React from 'react';
import classNames from 'classnames';

import './TabCard.scss';

type Props = {
  title: string;
  index: number;
  isActive: boolean;
  selectTab: (index: number) => void;
};

export const TabCard: React.FC<Props> = ({
  title, index, isActive, selectTab,
}) => {
  const classCondition = classNames('tabs__item', {
    active: isActive,
  });

  return (
    <button
      type="button"
      className={classCondition}
      onClick={() => selectTab(index)}
    >
      <p>
        {title}
      </p>
    </button>
  );
};
