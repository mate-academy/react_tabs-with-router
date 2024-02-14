import { Navigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <>
      <h1 className="title">Home page</h1>
      <Navigate to="/" />
    </>
  );
};
