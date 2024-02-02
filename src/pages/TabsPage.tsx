import { useParams } from 'react-router-dom';
import { TabsComp } from '../components/TabsComp';
import { tabs } from '../api/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();

  const tabsId = tabs.reduce((acc, el) => {
    return [...acc, el.id];
  }, [] as string []);

  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="title">Tabs page</h1>

          <TabsComp />

          {tabsId.includes(tabId || '')
            ? (
              <div className="block" data-cy="TabContent">
                {`Some text ${tabId?.slice(-1)}`}
              </div>
            )
            : (
              <div className="block" data-cy="TabContent">
                Please select a tab
              </div>
            )}
        </div>
      </div>
    </>
  );
};
