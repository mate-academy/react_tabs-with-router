import { useContext, useEffect } from 'react';
import { ACTIONS, StateContext } from './Tabs/TabContext';

export const HomePage: React.FC = () => {
  const { dispatch } = useContext(StateContext);

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_CONTENT, payload: '' });
  }, []);

  return (
    <div>
      <h1 className="title">Home page</h1>
      <h3>HOME PAGE ELEMENT</h3>
    </div>
  );
};
