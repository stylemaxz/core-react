import React, { Component } from 'react';
import Form from './Form'
import Contacts from './Contacts'

class App extends Component {
  state = {
    contacts: [{
      name: 'Kamin Konggawai',
      address: '123'
    }]
  }
  render() {
    return (
      <div className="container">
        <Form/>
        <hr/>
        <Contacts {...this.state}/>
      </div>
    )
  }
}

export default App;
