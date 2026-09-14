import { useEffect } from 'react';

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Home page';
  }, []);

  return <h1 className="title">Home page</h1>;
};
