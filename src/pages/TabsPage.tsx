import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { Tab } from '../types/Tab';
//import { NotFoundPage } from './NotFoundPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export function TabsPage() {
  const { tabId } = useParams();
  //const { pathname } = useLocation();
  const currentTab: Tab | undefined = tabs.find(tab => {
    // return pathname.includes(tab.id);
    return tab.id === tabId;
  });

  /* if (pathname !== '/tabs' && !currentTab) {
    return <NotFoundPage />;
  }
*/
  function isActive(path: string) {
    //return pathname.endsWith(path);
    return path === tabId;
  }

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        {<Tabs onActive={isActive} tabs={tabs} />}
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
}
