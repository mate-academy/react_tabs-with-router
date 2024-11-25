import { Navigate, useParams } from 'react-router-dom';

export const HomePage = () => {
  const { home } = useParams();

  if (home === 'home') {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1 className="title">Home page</h1>
    </>
  );
};
