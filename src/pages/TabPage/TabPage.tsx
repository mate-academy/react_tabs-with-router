import { useParams } from 'react-router-dom';
import { tabs } from '../../data/data';

export const TabPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(el => el.id === tabId);

  return (
    <>
      <span>{selectedTab?.content}</span>
    </>
  );
};
