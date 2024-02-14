import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Prop {
  tab: Tab,
}

export const NewTab: React.FC<Prop> = ({ tab }) => {
  const { tabId } = useParams();

  const seletedTabId = tabId;

  return (
    seletedTabId === tab.id ? (
      <li
        key={tab.id}
        data-cy="Tab"
        className={cn({ 'is-active': tab.id === seletedTabId })}
      >

        <Link
          to={`/tabs/${tab.id}`}
          data-cy="TabLink"
        >

          {tab.title}
        </Link>
      </li>
    ) : (
      <li
        key={tab.id}
        data-cy="Tab"
      >

        <Link
          to={`/tabs/${tab.id}`}
          data-cy="TabLink"
        >

          {tab.title}
        </Link>
      </li>
    )

  );
};
