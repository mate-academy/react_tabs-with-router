import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        color: 'Red',
        fontSize: '24px',
        marginTop: '10px',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      PAGE NOT FOUND RETURN
      {' '}
      <Button variant="primary" size="lg" active>
        <Link
          style={{ textDecoration: 'none', color: 'white' }}
          to="/"
        >
          HOME
        </Link>
      </Button>
    </div>
  );
};
