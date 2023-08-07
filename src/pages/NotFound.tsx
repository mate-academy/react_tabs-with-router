import { Navigate, useParams } from 'react-router-dom';

export const NotFound = () => {
  const params = useParams();

  if (params['*'] === 'home') {
    return <Navigate to=".." />;
  }

  return <h1 className="title">Page not found</h1>;
};
