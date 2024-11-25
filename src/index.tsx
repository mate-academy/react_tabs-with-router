import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';

const Root = () => (
  <Router>
    <App />
  </Router>
);

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<Root />);
