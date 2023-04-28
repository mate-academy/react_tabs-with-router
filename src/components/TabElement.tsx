import classNames from 'classnames';
import { Link } from 'react-router-dom';

type Props = {
  tabID: string,
  title: string,
  isActive: boolean,
};

export const TabElement: React.FC<Props> = ({
  tabID,
  isActive,
  title,
}) => {
  return (
    <>
      <li
        data-cy="Tab"
        className={classNames({
          'is-active': isActive,
        })}
      >
        <Link to={`/tabs/${tabID}`}>
          {title}
        </Link>
      </li>
    </>
  );
};
