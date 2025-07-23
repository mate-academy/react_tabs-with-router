import { useEffect } from 'react';

export function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page not found';
  }, []);

  return <h1 className="title">Page not found</h1>;
}
