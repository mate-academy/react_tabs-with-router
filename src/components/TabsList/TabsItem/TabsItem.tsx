import React from 'react';
import { Tab } from '../../../types/Tab';
import { Link, useParams } from 'react-router-dom';

type Props = {
  tab: Tab;
};

export const TabsItem: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();
  const tabTitle = tab.title;

  return (
    <li data-cy="Tab" className="is-active">
      <Link to={`../${tabId}`}>{`Tab ${tabTitle}`}</Link>
    </li>
  );
};
