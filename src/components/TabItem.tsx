import { useParams } from 'react-router-dom';
import { tabs } from '../tabs';

export const TabItem = () => {
  const { tabsId } = useParams();
  const tabContent = tabsId ? tabs.find(tab => tab.id === tabsId)?.content : '';

  return (
    <div className="block" data-cy="TabContent">
      {tabContent ? (
        <p>{tabContent}</p>
      ) : (
        <p>Please select a tab</p>
      )}
    </div>
  );
};
