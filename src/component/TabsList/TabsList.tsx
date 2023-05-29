import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabItem } from '../TabItem';
import { TabContent } from '../TabContent';

interface Props {
  tabs: Tab[];
}

export const TabsList: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const tabContent = tabs.find(tab => tab.id === tabId)?.content || '';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem tab={tab} key={tab.id} />
          ))}
        </ul>
      </div>

      <TabContent tabContent={tabContent} />
    </>
  );
};
