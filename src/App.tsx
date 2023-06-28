import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';

export const App = () => {
  return (
    <>
      <Header />

      <MainSection />
    </>
  );
};
