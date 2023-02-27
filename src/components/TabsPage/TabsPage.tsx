import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../../api/tabs';
import { TodoTable } from '../TodoTable';

export const TabsPage: FC = () => {
  const { tabId = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TodoTable tabs={tabs} selectedTabId={tabId} />
    </>
  );
};
