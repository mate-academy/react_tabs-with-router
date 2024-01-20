import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string,
};

interface Props {
  tabs: Tab[],
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === tabId })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {
          tabs.find(tab => tab.id === tabId)?.content || 'Please select a tab'
        }
      </div>
    </>
  );
};
