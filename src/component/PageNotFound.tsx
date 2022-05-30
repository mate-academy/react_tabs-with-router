import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const PageNotFound: React.FC = () => {
  return (
    <div>
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
