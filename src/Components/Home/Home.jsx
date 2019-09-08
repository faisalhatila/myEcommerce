import React, { Component } from 'react';
import ProductsList from './ProductsList';
import { Grid } from '@material-ui/core';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products : [],
            filteredProducts : []
        }
    }

    componentDidMount(){
        fetch("http://localhost:8000/products").then(res => res.json())
        .then(data => this.setState({
            products : data,
            filteredProducts : data
        }))
    }

    render() {

        return (
            <Grid style={{marginTop : '70px'}} className='container'>
                <ProductsList products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
            </Grid>
        )
    }
}
