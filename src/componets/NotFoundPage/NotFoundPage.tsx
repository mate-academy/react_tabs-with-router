import { memo } from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = memo(() => {
  return (
    <>
      <h2 className="NotFoundPage">
        Page not found. Go
        {' '}
        <Link className="NotFoundPage__back-to-home" to="/">Home</Link>
      </h2>
      <img
        className="NotFoundPage__image"
        src="https://c.tenor.com/f1fVZ5yuLaIAAAAd/sad.gif"
        alt="page not found"
        height="300px"
      />

    </>
  );
});
