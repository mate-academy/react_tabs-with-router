import { useParams } from 'react-router-dom';
import { TabElement } from '../components/TabElement';
import { tabs } from '../components/tabs';

export const Tabs: React.FC = () => {
  const { tabID } = useParams();
  const tabContent = tabs
    .find(tab => tab.id === tabID)?.content || 'Please select a tab';
  const isSelected = tabs.some(tab => tab.id === tabID);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => {
              const { id, title } = tab;
              const isActive = id === tabID;

              return (
                <TabElement
                  tabID={id}
                  title={title}
                  isActive={isActive}
                />
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {isSelected
            ? tabContent
            : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
