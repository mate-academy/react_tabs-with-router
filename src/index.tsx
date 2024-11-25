import { createRoot } from 'react-dom/client';
import { Root } from './Root';
import { TabProvider } from './components/TabProvide';

createRoot(document.getElementById('root') as HTMLElement).render(
  <TabProvider>
    <Root />
  </TabProvider>,
);
