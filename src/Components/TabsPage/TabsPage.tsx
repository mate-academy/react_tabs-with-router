import {
  Routes,
  Route,
} from 'react-router-dom';
import { TabsMain } from '../TabsMain/TabsMain';
import { TabsTitle } from '../TabsTitle/TabsTitle';
import './style.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  return (
    <>
      <TabsTitle tabs={tabs} />
      <Routes>
        <Route path=":tabId" element={<TabsMain tabs={tabs} />} />
      </Routes>
    </>
  );
};
