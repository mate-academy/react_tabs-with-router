import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[],
  tabId: string;
}

export const Tabs:React.FC<Props> = ({ tabs, tabId }) => {
  // const { tabId = 0 } = useParams();
  const isSelected = (tab: Tab) => tab.id === tabId;

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            data-cy="Tab"
            key={tab.id}
            className={cn({ 'is-active': isSelected(tab) })}
          >
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
