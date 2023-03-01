import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../../../api';
import { Tabs } from '../../Tabs/Tabs';

export const TabsPage: FC = () => {
  const { tabId } = useParams();

  const selectedTabContent = tabs
    .find(tab => tab.id === tabId)?.content || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs />

      <div className="block" data-cy="TabContent">
        {selectedTabContent || 'Please select a tab'}
      </div>
    </>
  );
};
