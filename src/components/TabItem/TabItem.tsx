import { FC } from 'react';
import {
  Link,
  useParams,
} from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab,
}

export const TabItem: FC<Props> = ({ tab }) => {
  const { tabId } = useParams();
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      className={cn({
        'is-active': id === tabId,
      })}
      key={id}
    >
      <Link to={`../${id}`}>{title}</Link>
    </li>
  );
};
