import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import Navbar from './components/Navbar';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const App = ({ children }: Props) => (
  <>
    <Navbar />

    <div className="section">
      <div className="container">{children}</div>
    </div>
  </>
);
