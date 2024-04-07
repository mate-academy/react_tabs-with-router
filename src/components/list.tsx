import { Route } from 'react-router-dom';
import { tabsList } from '../tabsContent';
import { Tab } from './tab';

export const List = () => {
  return (
    <>
      {tabsList.map(elem => (
        <Route
          key={elem.id}
          path={elem.id}
          element={<Tab key={elem.id} content={elem.content} />}
        />
      ))}
    </>
  );
};
