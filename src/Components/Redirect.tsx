import { Navigate } from 'react-router-dom';

export const RedirectToRoot: React.FC = () => {
  return <Navigate to="/" />;
};
