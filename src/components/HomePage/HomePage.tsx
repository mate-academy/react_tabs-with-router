import { FC, memo } from 'react';

import './HomePage.scss';

export const HomePage: FC = memo(() => {
  return (
    <div className="home-page">
      <h1 className="home-page-title">
        Home page
      </h1>
    </div>
  );
});
