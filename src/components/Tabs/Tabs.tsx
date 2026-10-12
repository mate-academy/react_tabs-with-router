import { useGlobalState } from '../../store/GlobalProvider';
import { TabComponent } from '../Tab/TabComponent';

export const Tabs = () => {
  const { tabs } = useGlobalState();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          return <TabComponent tab={tab} key={tab.id} />;
        })}
      </ul>
    </div>
  );
};
