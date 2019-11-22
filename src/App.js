import React, { useState } from 'react';
import './App.css';
import ListSomeText from './ListSomeText';

const App = () => {
  const [active, setActive] = useState("home");

  return (
    <>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button class="btn btn-secondary ml-3 mt-3" type="button" onClick={() => setActive("home")} >Home</button>
        <button class="btn btn-secondary mr-3 mt-3" type="button" onClick={() => setActive("profile")} >Profile</button>
      </div>
      <div className={"m-3"} >{active === "home" ? <div className={"badge badge-primary text-wrap"}><p>Home</p></div> : <ListSomeText />}</div>
    </>
  );
}

export default App;
