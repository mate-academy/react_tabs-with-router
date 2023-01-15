import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TabsContext } from '../context/TabsContext';
import { Tab } from '../types/Tab';

export const TabPage: FC = () => {
  const tabs = useContext(TabsContext)?.tabs as Tab[];
  const { tabId } = useParams<{ tabId: string }>();
  const tab = tabs.find((t) => t.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {tab && <p>{tab.content}</p>}
    </div>
  );
};
