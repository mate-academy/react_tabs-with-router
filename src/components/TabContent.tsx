import { useParams } from 'react-router-dom';
import { tabs } from '../tabs/tabs';

export const TabContent = () => {
  const { tabId } = useParams();
  const tabContent = tabs.find(tab => tab.id === tabId);
  const tabContentTru = tabContent?.content ? (
    tabContent.content
  ) : (
    <p>Please select a tab</p>
  );

  console.log(tabContentTru)

  return (
    <div className="block" data-cy="TabContent">
      {tabContentTru}
    </div>
  );
};

export default TabContent;
