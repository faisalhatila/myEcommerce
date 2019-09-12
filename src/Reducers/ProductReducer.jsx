import { FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRICE } from "../Actions/Types";

const initialState = {items : [], filteredItems : []};
export default function(state = initialState, action){
    switch(action.type){
        case FETCH_PRODUCTS:
            return {...state, items : action.payload};
        
        case ORDER_PRODUCTS_BY_PRICE :
            return {
                ...state,
                filteredItems : action.payload.items,
                sort : action.payload.sort
            }
        
        default:
            return state;

    }
}