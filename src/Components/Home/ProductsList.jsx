import React, { Component } from 'react'
// import {connect} from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
import Utils from '../../Utils'
import { connect } from 'react-redux';
import {fetchProducts} from '../../Actions/ProductActions';
import {addToCart} from '../../Actions/CartAction';


class ProductsList extends Component {
    componentWillMount(){
        this.props.fetchProducts();
    }
    render() {        
        // const useStyles = makeStyles(theme => ({
        //     root: {
        //         display : 'flex',
        //     },
        //     button: {
        //         margin: theme.spacing(1),
        //     },
        //     paper: {
        //         padding: theme.spacing(2),
        //         textAlign: 'center',
        //         color: theme.palette.text.secondary,
        //     },
        //     card: {
        //         maxWidth: 345,
        //     },
        //     media: {
        //         height: 140,
        //     },
        //     display : {
        //         display : 'inline-flex',
        //     }
        //   }));
        const productItems = this.props.products;
        return (
            <div>
                {productItems.map(items => {
                    return (
                        <Grid key={items.id} item style={{paddingLeft : '20px', marginTop : '20px', display : 'inline-flex'}}>
                            <Card style={{width : '330px'}}>
                                <CardActionArea>
                                    <Link to={`/products/${items.id}`}>
                                        <CardMedia
                                        component = 'img'
                                        alt = {items.title}
                                        height = '340'
                                        image = {items.image}
                                        title = {items.title}
                                        />
                                        <CardContent>
                                            <Typography style={{color : '#000'}} gutterBottom variant='h5' component='h2'>
                                                {items.title}
                                            </Typography>
                                            <Typography style={{color : '#000'}} gutterBottom variant='h6' component='h2'>
                                                {`Price : ${Utils.formatCurrency(items.price)}`}
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                    <CardActions>
                                        <Tooltip title='Add To Cart'>
                                            <Button
                                            variant="contained"
                                            color="primary"
                                            onClick = {() =>this.props.addToCart(this.props.cartItems,items)}
                                            >
                                                <ShoppingCartIcon fontSize='small' />
                                            </Button>
                                        </Tooltip>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products : state.products.items,
    cartItems : state.cart.items,
});

// const mapDispatchToProps = state => (mapStateToProps, {fetchProducts}) => {

// }

export default connect(mapStateToProps,{fetchProducts, addToCart})(ProductsList);