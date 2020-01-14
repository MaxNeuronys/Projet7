import React, { Component } from 'react';
import './App.css'
// import Details from 'src/components/details/Details'
import { Header, MapContainer, Details } from './components'

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill pt-3 p-2" >
          <MapContainer />
          <Details />
        </div>
      </div>
    );
  }
}

export default App;