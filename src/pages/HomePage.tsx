import { Navigate } from 'react-router-dom';

export const HomePage = () => (
  <>
    <Navigate to="/" />
    <h1 className="title">Home page</h1>
  </>
);
