import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabItem } from './TabItem';

type Props = {
  tabs: Tab[];
};

export const Tabs: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => <TabItem tab={tab} />)}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">

        {selectedTab?.content || <p>Please select a tab </p>}
      </div>
    </>
  );
};
