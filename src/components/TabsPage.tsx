import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
};
export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={cn({ 'is-active': tabId === id })}
            >
              <Link to={`/tabs/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find((tab) => tab.id === tabId)?.content || 'Please select a tab'}
      </div>
    </>
  );
};
