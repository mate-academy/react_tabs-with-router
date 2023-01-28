import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabLink } from '../TabContent';
import { getContentByTabId } from './helper';

export interface Props {
  tabs: Tab[];
}

export const Tabs: FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();

  const tabContent = getContentByTabId(tabs, tabId);

  return (
    <>
      <h1 className="title">
        Tabs page
      </h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabLink
              key={tab.id}
              tab={tab}
              tabId={tabId}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!tabContent
          ? 'Please select a tab'
          : tabContent}
      </div>
    </>
  );
};
