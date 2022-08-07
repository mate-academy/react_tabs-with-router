import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="tabs/*" element={<Tabs />}>
        <Route path="tab-1" element={<div>Text 1</div>} />
        <Route path="tab-2" element={<div>Text 2</div>} />
        <Route path="tab-3" element={<div>Text 3</div>} />
        <Route path="*" element={<div>Select a tab</div>} />
      </Route>
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  </>
);

export default App;
