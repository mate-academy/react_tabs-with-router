import React from 'react';
import './Loader.scss';

export const Loader: React.FC = () => (
  <div className="Loader">
    <h1 className="title is-3 has-text-dark">Page not found</h1>

    <div className="Loader__content" />
  </div>
);
