import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { TabsAppProvider } from './components/TabsAppContext';
import { TabsApp } from './components/TabsApp';

export const App = () => {
  return (
    <TabsAppProvider>
      <TabsApp />
    </TabsAppProvider>
  );
};
