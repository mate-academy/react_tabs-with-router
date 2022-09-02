import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tab: Tab;
  // isActive: string;
  // setIsActive: (id: string) => void;
  setTabText: (text: string) => void;
  tabId: string;
}

export const TabLink: React.FC<Props> = ({
  tab, setTabText, tabId,
}) => {
  const isSelected = useMemo(() => (
    (element: Tab) => element.id === tabId
  ), [tabId]);

  return (
    <li
      data-cy="tab"
      className={classNames({ 'is-active': isSelected(tab) })}
    >
      <Link
        to={`/tabs/${tab.id}`}
        onClick={() => {
          setTabText(tab.content);
        }}
      >
        {tab.title}
      </Link>
    </li>
  );
};
