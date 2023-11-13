import { Link, Outlet, useParams } from 'react-router-dom';
import cn from 'classnames';

export const TabsPage = () => {
  const { TabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab" className={cn({ 'is-active': TabId === 'tab-1' })}>
            <Link to="tab-1">Tab 1</Link>
          </li>
          <li data-cy="Tab" className={cn({ 'is-active': TabId === 'tab-2' })}>
            <Link to="tab-2">Tab 2</Link>
          </li>
          <li data-cy="Tab" className={cn({ 'is-active': TabId === 'tab-3' })}>
            <Link to="tab-3">Tab 3</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
