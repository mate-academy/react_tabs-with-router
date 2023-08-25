import { Navigate } from 'react-router-dom';

export const HomePage = () => {
  return (
    <h1 className="title">Home page</h1>
  );
};

export const HomeRedirect = () => {
  return <Navigate to="/" replace />;
};
