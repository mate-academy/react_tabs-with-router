import { useOutletContext, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

export const TabContent = () => {
  const { tabsId } = useParams();
  const tabs = useOutletContext<Tab[]>();
  const currentTab = tabs.find(tab => tab.id === tabsId);

  return (
    <>
      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
