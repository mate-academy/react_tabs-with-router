import { Tab } from '../../types/Tab';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const activeTabContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': tabId && tabId === id })}
              key={id}
            >
              <Link to={`/tabs/${id}`} data-cy="TabLink">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabContent || 'Please select a tab'}
      </div>
    </div>
  );
};
