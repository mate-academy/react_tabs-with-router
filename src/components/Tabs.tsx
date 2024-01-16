import { NavLink, Outlet } from 'react-router-dom';
import { TabType } from '../types/Tab';

interface Props {
  tabs: TabType[],
}

export const Tabs: React.FC<Props> = ({
  tabs,
}) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((currentTab: TabType) => (
            <li key={currentTab.id} data-cy="Tab">
              <NavLink to={`/tabs/${currentTab.id}`}>{currentTab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <Outlet />
      </div>
    </>
  );
};
