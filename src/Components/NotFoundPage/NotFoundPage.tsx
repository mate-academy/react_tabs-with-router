import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <h2>Not found page</h2>
      <Link to="/">go to home page</Link>
    </div>
  );
};
