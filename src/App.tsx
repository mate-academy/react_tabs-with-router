import React, { memo } from 'react';

import './App.scss';

import { useParams, Outlet } from 'react-router-dom';

const App: React.FC = memo(() => {
  const { tabId } = useParams();

  return (
    <div className="App">
      <div className="container">
        <h1 className="App__title">
          {`Selected tab is: ${tabId || ''}`}
        </h1>

        <Outlet />
      </div>
    </div>
  );
});

export default App;
