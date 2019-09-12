import { FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRICE } from "./Types";

export const fetchProducts = () => (dispatch) => {
    fetch("http://localhost:8000/products").then(res => res.json())
        .then(data => {
            return dispatch({type : FETCH_PRODUCTS, payload : data});
        });
}

export const sortProducts = (items, sort) => (dispatch) => {
    
    const products = items.slice();
    if(sort !== ''){
        products.sort((a,b) =>(sort === 'lowest') ?
        (a.price - b.price) : 
        (b.price - a.price) )
    }
    
    else {
        products.sort((a,b) => (a.id > b.id) ? 1 : -1);
    }

    return dispatch({
        type : ORDER_PRODUCTS_BY_PRICE,
        payload : {
            sort : sort,
            items : products

        }
    })
}