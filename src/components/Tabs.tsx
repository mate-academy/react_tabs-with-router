import { useParams } from 'react-router-dom';
import { findContentByIdTabs } from '../tabsInit';
import { TabsList } from './TabsList';

export const Tabs = () => {
  const { tabId = null } = useParams();
  const tabCurrent = findContentByIdTabs(tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <TabsList tabId={tabId} />
      </div>

      <div className="block" data-cy="TabContent">
        {tabCurrent || 'Please select a tab'}
      </div>
    </div>
  );
};
