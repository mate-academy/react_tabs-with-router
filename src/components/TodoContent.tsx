import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[],
  tabId: string;
}

export const TodoContent:React.FC<Props> = ({ tabs, tabId }) => {
  // const { tabId = 0 } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {selectedTab ? selectedTab.title : 'Please select a tab'}
    </div>
  );
};
