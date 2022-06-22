import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../Types';

interface Props {
  tabs : Tab[]
}

export const Tabs : React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <>
      {tabs.map(el => (
        <Link
          key={el.id}
          to={`/tabs/${el.id}`}
          className={classNames({ active: (tabId === el.id) })}
          type="button"
        >
          {el.title}
        </Link>
      ))}
      {tabs.map(el => (
        <>
          {(el.id === tabId
          && (
            <p key={el.id}>
              {el.content}
            </p>
          ))}
        </>
      ))}
    </>
  );
};
