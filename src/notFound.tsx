import { NavComponent } from './components/navComponent';

export function NotFound() {
  return (
    <>
      <NavComponent />
      <div className="section">
        <div className="container">
          <h1 className="title">Page not found</h1>
        </div>
      </div>
    </>
  );
}
