import React, { Component } from 'react';
import Routers from './Routers';
import {Provider} from 'react-redux';
import store from './Store';


export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Routers />
      </Provider>
    )
  }
}