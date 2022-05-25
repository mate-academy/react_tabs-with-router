import { FC, memo } from 'react';

import './NotFoundPage.scss';

export const NotFoundPage: FC = memo(() => {
  return (
    <h2 className="not-found-page">
      Page not found
    </h2>
  );
});
