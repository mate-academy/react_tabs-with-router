import { FC } from 'react';
import { Tab } from '../../types/Tab';
import TabItem from '../TabItem';

interface Props {
  tabs: Tab[];
}

export const TabList: FC<Props> = ({ tabs }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <TabItem
            key={tab.id}
            tab={tab}
          />
        ))}
      </ul>
    </div>
  );
};
