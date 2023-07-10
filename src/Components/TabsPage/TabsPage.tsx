import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TabItem } from '../TabItem';
import { Tab } from '../../types/Tab';
import { getTabById } from '../../helpers';

type Props = {
  tabs: Tab[],
};

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = getTabById(tabs, tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => <TabItem key={tab.id} tab={tab} />)}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">

        {selectedTab?.content || <p>Please select a tab </p>}
      </div>
    </>
  );
};
