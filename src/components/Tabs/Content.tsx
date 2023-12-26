import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[]
};

export const Content:FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const findTab = tabs.find(item => item.id === tabId);

  return <>{findTab ? findTab.content : 'Please select a tab'}</>;
};
