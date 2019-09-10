import React, { Component } from 'react';
import util from '../../Utils';
export default class Basket extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className='alert alert-info'>
                {cartItems.length ===0 ? 'Basket Is Empty' : <div>You have {cartItems.length} products in basket</div>}
                {cartItems.length > 0 &&
                    <div>
                        <ul>
                            {cartItems.map(item =>
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    x {item.count} = {item.price * item.count}
                                    &nbsp;
                                    <button
                                    className="btn btn-danger"
                                    onClick={(e) => this.props.handleRemoveFromCart(e,item)}>
                                        x
                                    </button>
                                </li>
                            )}
                        </ul>
                        Total : {util.formatCurrency(cartItems.reduce((a , c) => a + c.price * c.count, 0))}
                        <div>
                            {
                                cartItems.length !== 0 ? <button>CheckOut</button> : 0
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}
