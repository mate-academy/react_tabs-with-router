import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
};

const TabItem: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();

  return (
    <li
      data-cy="Tab"
      className={cn({
        'is-active': tab.id === tabId,
      })}
    >
      {tabId === tab.id ? (
        <Link to="../">{tab.title}</Link>
      ) : (
        <Link to={`../${tab.id}`}>{tab.title}</Link>
      )}
    </li>
  );
};

export default TabItem;
