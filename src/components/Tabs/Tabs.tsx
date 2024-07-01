import { useContext } from 'react';
import { TabItem } from '../TabItem/TabItem';
import { TabsContext } from '../../TabsContext';

export const Tabs = () => {
  const { tabs, selTab } = useContext(TabsContext);
  const currentText = selTab?.content;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return <TabItem tab={tab} key={tab.id} />;
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentText || 'Please select a tab'}
      </div>
    </>
  );
};
