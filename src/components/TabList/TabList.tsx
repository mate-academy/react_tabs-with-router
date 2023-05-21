import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabItem } from '../TabItem';
import { TabContent } from '../TabContent';

interface Props {
  tabs: Tab[];
}

export const TabList: FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();
  const content = tabs.find((tab) => tab.id === tabId)?.content || '';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabItem key={tab.id} tab={tab} tabId={tabId} />
          ))}
        </ul>
      </div>

      <TabContent content={content} />
    </>
  );
};
