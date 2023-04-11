import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabItem } from '../TabItem/TabItem';

type Props = {
  tabs: Tab[]
};

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const activeTad = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = tabId === tab.id;

            return (
              <TabItem
                tab={tab}
                key={tab.id}
                isSelected={isSelected}
              />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTad ? (
          activeTad.content
        ) : (
          'Please select a tab'
        ) }
      </div>
    </>
  );
};
