import { useEffect } from 'react';
export const Home = () => {
  useEffect(() => {
    document.documentElement.classList.add('has-navbar-fixed-top');

    return () => {
      document.documentElement.classList.remove('has-navbar-fixed-top');
    };
  }, []);

  return (
    <div>
      <h1 className="title">Home page</h1>
    </div>
  );
};
