import { TabData } from '../types/TabData';

interface TabContentProps {
  tab: TabData | null,
}

export const TabContent:React.FC<TabContentProps> = ({ tab }) => {
  return (
    <div className="block" data-cy="TabContent">
      {tab ? tab.content : 'Please select a tab'}
    </div>
  );
};
