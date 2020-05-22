/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import classNames from 'classnames';

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
    <div
      className={classCondition}
      onClick={() => selectTab(index)}
    >
      <p>
        {title}
      </p>
    </div>
  );
};
