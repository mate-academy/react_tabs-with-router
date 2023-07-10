import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';
import { tabs } from '../api/api';

interface Props {
  tab: Tab
  setSelectedTab: (tab: Tab | null) => void
}

export const TabItem: React.FC<Props> = ({
  tab,
  setSelectedTab,
}) => {
  const { tabId } = useParams();

  useEffect(() => {
    const tabFromServer = tabs.find(el => el.id === tabId) || null;

    setSelectedTab(tabFromServer);
  }, [tabId, setSelectedTab]);

  return (
    <>
      <li
        data-cy="Tab"
        className={classNames({ 'is-active': tabId === tab.id })}
      >
        <Link to={`/tabs/${tab.id}`}>
          {tab.title}
        </Link>
      </li>
    </>
  );
};
