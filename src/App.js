import React, { Component } from 'react';
import './App.css'
import { Col , Row, Container} from "react-bootstrap"
// import Details from 'src/components/details/Details'
import { Header, MapContainer, Details } from './components'

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row justify-content-between flex-fill" >
        <Container fluid className="p-0">
          <Row className="heightrow">
            <Col lg={9}><MapContainer /> </Col>
            <Col lg={3}><Details /> </Col>
          </Row>
        </Container>
        </div>
      </div>
    );
  }
}

export default App;