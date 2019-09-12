import React, { Component } from 'react';
import ProductsList from './ProductsList';
import { Grid } from '@material-ui/core';
import Filter from '../Filter/Filter';
import Basket from '../Basket/Basket';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : [],
            filteredProducts : [],
            cartItems : []
        }
    }
    

    componentWillMount(){
        if(localStorage.getItem('cartItems')){
            this.setState({cartItems : JSON.parse(localStorage.getItem('cartItems'))});
        }
    }

    // handleChangeSort = (e) => {
    //     this.setState({sort : e.target.value});
    //     this.listProducts();
    // }
    // listProducts = () => {
    //     this.setState(state => {
    //         if(state.sort !== ''){
    //             state.products.sort((a,b) =>(state.sort === 'lowest') ?
    //             (a.price - b.price) : 
    //             (b.price - a.price) )
    //         }
            
    //         else {
    //             state.products.sort((a,b) => (a.id > b.id) ? 1 : -1);
    //         }

    //         return {filteredProducts : state.products}
    //     })
    // }

    // handleAddToCart = (e,product) => {
    //     this.setState(state => {
    //         const cartItems = state.cartItems;
    //         let productAlreadyInCart = false;
    //         cartItems.forEach(item => {
    //             if(item.id === product.id){
    //                 productAlreadyInCart = true;
    //                 item.count++;
    //             }
    //         });
    //         if(!productAlreadyInCart){
    //             cartItems.push({...product, count : 1});
    //         }
    //         localStorage.setItem('cartItems', JSON.stringify(cartItems));
    //         return cartItems;
    //     })
    // }

    // handleRemoveFromCart = (e,item) => {
    //     this.setState(state => {
    //         const cartItems = state.cartItems.filter(elm => elm.id !== item.id);
    //         localStorage.setItem('cartItems',cartItems);
    //         return {cartItems};
    //     });
    // }

    render() {

        return (
            <Grid style={{marginTop : '70px'}} className='container'>
                <br/>
                <Filter size={this.state.size} sort={this.state.sort}
                handleChangeSort={this.handleChangeSort} count={this.state.filteredProducts.length} />
                <hr />
                <Basket cartItems = {this.state.cartItems} handleRemoveFromCart = {this.handleRemoveFromCart} />
                <hr/>
                <ProductsList products={this.state.filteredProducts}
                handleAddToCart={this.handleAddToCart} />
            </Grid>
        )
    }
}
