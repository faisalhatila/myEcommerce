import Button from '@material-ui/core/Button';
import React, { Component } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
import './style/Products.css';
import NotFound from '../NotFound/NotFound';

export default class Products extends Component {
    constructor(props){
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
        const products = this.state.filteredProducts;
        const selectedId  = this.props.match.params.id ;
        const selectedProduct = products.find(items=>items.id===selectedId)

        if(selectedProduct) {
            console.log(selectedProduct.id);
            
            return (
                <div className="container">
                    <div style={{marginTop : '90px'}} className='row'>
                        <div className='col-lg-5'>
                            <img className='imageStyle' style={{height : '290px', borderRadius : '100%', border : 'solid 2px #800', boxShadow : '3px 3px 20px #888888'}} src={selectedProduct.image} alt=""/>
                        </div>
                        <div className='col-lg-7 container'>
                            <h3>{`Product Name : ${selectedProduct.title}`}</h3>
                            <h3>{`Price : ${selectedProduct.price}`}</h3>
                            <h3>Description : </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nam nihil similique debitis
                            beatae, doloribus, sequi at consequuntur sunt provident excepturi libero ducimus quibusdam
                            facere corrupti rem molestias quod laudantium.</p>
                            <Tooltip title='add to cart'>
                                <Button variant="contained" color="primary">
                                    <ShoppingCartIcon title='add to cart' fontSize="small" />
                                </Button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            )
        }
        

        else {
            console.log('sorry')
            return (
                <div style={{marginTop : '90px'}}>
                    <NotFound />
                </div>
            )
        }
    }
}

