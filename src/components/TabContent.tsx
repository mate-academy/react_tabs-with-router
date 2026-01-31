import { useParams } from 'react-router-dom';
import { tabs } from '../tabs/tabs';

export const TabContent = () => {
  const { tabId } = useParams();
  const tabContent = tabs.find(tab => tab.id === tabId);

  // console.log( tabId, tabContent, tabContent.content)

  return (
    <div className="block" data-cy="TabContent">
      {tabContent?.content ? tabContent.content : <p>Please select a tab</p>}
    </div>
  );
};

export default TabContent;
