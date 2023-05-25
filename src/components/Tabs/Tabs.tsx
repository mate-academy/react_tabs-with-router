import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { tabsList } from '../../TabsList';
import { Tab } from '../../types/Tab';
import { TabLink } from '../TabLink';

export const Tabs: FC = () => {
  const { tabId = '' } = useParams();

  const currentTab = tabsList.find((tab: Tab) => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabsList.map((tab: Tab) => (
            <TabLink key={tab.id} path={tab.id} title={tab.title} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
