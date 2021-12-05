import { Routes, Route } from 'react-router-dom';
import { TabContent } from '../../components/TabContent';
import { Tabs } from '../../components/Tabs';
import { Wrapper } from '../../components/Wrapper';
import { Tab } from '../../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  return (
    <section className="TabsPage">
      <Wrapper>
        <Tabs tabs={tabs} />

        <Routes>
          <Route path="" element={<TabContent tabs={tabs} />} />
          <Route path=":tabId" element={<TabContent tabs={tabs} />} />
        </Routes>
      </Wrapper>
    </section>
  );
};
