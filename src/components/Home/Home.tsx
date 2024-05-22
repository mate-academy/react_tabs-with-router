import { Navigate } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <h1 className="title">Home page</h1>
      <Navigate to="/" />
    </>
  );
};