import { useParams } from 'react-router-dom';
import { Tables } from '../Components/Tables';
import { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabsId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tables tabs={tabs} selectedTabsId={tabsId} />
    </>

  );
};
