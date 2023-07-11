import { FC } from 'react';

export const NotFound: FC = () => (
  <>
    <h1 className="title" style={{ textAlign: 'center' }}>
      Page not found
    </h1>
    <img
      // eslint-disable-next-line max-len
      src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHdqcmc5eHRxcXA2amg5cDYyNjhrNnJxNDcweHJibGpqNHFvcXJwcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VwoJkTfZAUBSU/giphy.gif"
      alt="Page Not Found"
      style={{
        display: 'block',
        margin: '0 auto',
        width: '25%',
      }}
    />
  </>
);
