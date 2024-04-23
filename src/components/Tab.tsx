import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

type Props = {
  tab: { id: string; title: string; content: string };
};

export const Tab: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();
  const selectedTabId = tabId ? tabId : 0;

  return (
    <>
      <li
        data-cy="Tab"
        className={classNames('', {
          'is-active': selectedTabId === tab.id,
        })}
      >
        <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
      </li>
    </>
  );
};
