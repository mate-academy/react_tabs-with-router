import React from 'react';
import './App.css';
import ListSomeText from './ListSomeText';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      active: "home",
    };

    this.setActive = this.setActive.bind(this);
  }

  setActive (active) {
    this.setState({active})
  }

  render() {
    console.log(this.state.active)
    return (
      <>
        <button onClick={() => this.setActive("home")} >Home</button>
        <button onClick={() => this.setActive("profile")} >Profile</button>
        <div>{this.state.active === "home" ? <p>Home</p> : <ListSomeText />}</div>
      </>
    );
  }
}

export default App;
