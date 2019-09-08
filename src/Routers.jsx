import {Switch, Router, Route} from 'react-router-dom';
import history from './History';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import NotFound from './Components/NotFound/NotFound'

import React, { Component } from 'react'
import Cart from './Components/Cart/Cart';

export default class Routers extends Component {
    render() {
        return (
            <Router history = {history}>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path = '/cart' component={Cart} />
                    <Route path="/products/:id"  component={Products}></Route>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}