import { Link } from 'react-router-dom';

export const TabNavigation = () => {
  return (
    <div className="tabs is-boxed">
      <ul>
        <li data-cy="Tab" className="is-active">
          <Link to="#/">Tab 1</Link>
        </li>
        <li data-cy="Tab">
          <Link to="#/">Tab 2</Link>
        </li>
        <li data-cy="Tab">
          <Link to="#/">Tab 3</Link>
        </li>
      </ul>
    </div>
  );
};
