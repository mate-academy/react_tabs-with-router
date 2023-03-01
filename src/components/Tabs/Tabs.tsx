import { FC } from 'react';
import { tabs } from '../../api';
import { TabItem } from '../TabItem';

export const Tabs: FC = () => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (

          <TabItem tab={tab} />

        ))}
      </ul>
    </div>
  );
};
