import './NotFoundPage.scss';
import { NavLink } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h2 className="not-found-page__title">Not found page</h2>
      <NavLink to="/" className="not-found-page__link">Go to home page</NavLink>
    </div>
  );
};
