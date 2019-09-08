import React, { Component } from 'react';
import Routers from './Routers';
import {Provider} from 'react-redux';
// import store from './Components/Store/index';


export default class App extends Component {
  render() {
    return (
      <Provider >
        <Routers />
      </Provider>
    )
  }
}