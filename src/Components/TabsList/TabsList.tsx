import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { Tabs } from '../Tabs/Tabs';

interface Props {
  tabs: Tab[]
}

export const TabsList: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedElement = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <Tabs tab={tab} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedElement ? selectedElement.content : 'Please select a tab'}
      </div>
    </>
  );
};
