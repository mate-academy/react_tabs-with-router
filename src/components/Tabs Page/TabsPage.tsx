import classNames from 'classnames';
import { Link, Outlet, useParams } from 'react-router-dom';
import './TabsPage.scss';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = (props) => {
  const { tabId } = useParams<{ tabId: string }>();
  const { tabs } = props;

  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li className={classNames('tabs__item', { 'tabs__item--active': tab.id === tabId })} key={tab.id}>
            <Link to={`/tabs/${tab.id}`} className="tabs__link">{tab.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
