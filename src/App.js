import React, { Component } from 'react';
import './App.css'

import { Header, Map, Details } from './components'

class App extends Component {
  render() {
    return (
      <div className="App pt-2 d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill pt-3 p-2" >
          <Map />
          <Details />
        </div>
      </div>
    );
  }
}

export default App;