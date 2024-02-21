import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';

const AppWrapper: React.FC = () => {
  document.documentElement.classList.add('has-navbar-fixed-top');

  return (
    <Router>
      <App />
    </Router>
  );
};

createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <AppWrapper />,
  );
