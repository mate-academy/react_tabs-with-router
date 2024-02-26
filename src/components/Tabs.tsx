import { NavLink, useParams } from 'react-router-dom';
import { Tab } from './Tabs/Tabs/Tab';
import { TabType } from '../types/Tab';

interface Props {
  tabs: TabType[],
}

export const Tabs: React.FC<Props> = ({
  tabs,
}) => {
  const { id } = useParams();
  const findTab = tabs.find(tab => tab.id === id);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((currentTab: TabType) => (
            <li
              className={currentTab.id === id ? 'is-active' : ''}
              key={currentTab.id}
              data-cy="Tab"
            >
              <NavLink to={`/tabs/${currentTab.id}`}>{currentTab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {findTab ? <Tab tabs={tabs} /> : 'Please select a tab' }
      </div>
    </>
  );
};
