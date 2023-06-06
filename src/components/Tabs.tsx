import { useParams } from 'react-router-dom';
import { TabLink } from './TabLink';
import { TabData } from '../types/TabData';
import { TabContent } from './TabContent';

interface TabsProps {
  tabs: TabData[],
}

export const Tabs:React.FC<TabsProps> = ({ tabs }) => {
  const { selectedTabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <>
                <TabLink key={tab.id} tab={tab} />
              </>
            );
          })}
        </ul>
      </div>
      <TabContent tab={selectedTab} />
    </>
  );
};
