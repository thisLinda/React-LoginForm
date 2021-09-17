import React from 'react';
import Login from './components/login';
import NavBar from './components/navBar';

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <br></br>
        <Login />
      </div>
    );
  }
}