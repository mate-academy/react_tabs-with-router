import { useEffect } from 'react';

export function HomePage() {
  useEffect(() => {
    document.title = 'Home page';
  }, []);

  return <h1 className="title">Home page</h1>;
}
