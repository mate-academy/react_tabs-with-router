import { Outlet, NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';

export const Tabs = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId && tabId;

  const generateClassForLink = (tabsId: string) => cn({
    'is-active': selectedTabId === tabsId,
  });

  const index = selectedTabId && selectedTabId.split('').indexOf('-');
  const id = selectedTabId && index && Number(selectedTabId?.slice(index + 1));

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab" className={generateClassForLink('tab-1')}>
            <NavLink to="tab-1">Tab 1</NavLink>
          </li>
          <li data-cy="Tab" className={generateClassForLink('tab-2')}>
            <NavLink to="tab-2">Tab 2</NavLink>
          </li>
          <li data-cy="Tab" className={generateClassForLink('tab-3')}>
            <NavLink to="tab-3">Tab 3</NavLink>
          </li>
        </ul>
      </div>
      {id && id > 0 && id < 4 ? (
        <Outlet />
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
