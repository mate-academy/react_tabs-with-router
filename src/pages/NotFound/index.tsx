import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFound: FC = () => {
  return (
    <>
      <h2 className="not-found">Page not found 🙃</h2>
      <p className="not-found">
        <Link
          className="App__navigation-link"
          to="/"
        >
          Go to 🏠
        </Link>
      </p>
    </>
  );
};
