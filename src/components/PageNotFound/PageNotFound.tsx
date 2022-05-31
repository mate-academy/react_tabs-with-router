import React from 'react';
import NotFound from '../../image/notFound.gif';
import './PageNotFound.scss';

export const PageNotFound: React.FC = () => {
  return (
    <div className="notFound">
      <h1 className="notFound__title">
        Page not found
      </h1>
      <img
        src={NotFound}
        alt="NotFound"
        className="notFound__image"
      />
    </div>
  );
};
