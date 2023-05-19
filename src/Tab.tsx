import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { TabType } from './types/TabInterface';

type Props = {
  tab: TabType,
  selectedTabId: string | undefined,
};

export const Tab: React.FC<Props> = ({ tab, selectedTabId }) => {
  const {
    id,
    title,
  } = tab;

  return (
    <>
      <li
        data-cy="Tab"
        className={classnames(
          { 'is-active': id === selectedTabId },
        )}
      >
        <Link to={`/tabs/${id}`}>{title}</Link>
      </li>
    </>
  );
};
