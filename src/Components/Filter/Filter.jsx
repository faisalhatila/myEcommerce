import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sortProducts} from '../../Actions/ProductActions';
import {fetchProducts} from '../../Actions/ProductActions';


class Filter extends Component {

    render() {
        
        return (
            <div className='row'>
                <div className="col-md-4">
                    <h6>{`${this.props.fetch.length} Products Found`}</h6>
                </div>
                <div className="col-md-4">
                    <label>
                        Order By &nbsp;
                        <select value={this.props.sort}
                        onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                            <option value="">Selet</option>
                            <option value="lowest">Lowest To Highest</option>
                            <option value="highest">Highest To Lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4"></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filteredProducts : state.products.filteredItems,
    sort : state.products.sort,
    fetch : state.products.items
})

export default connect(mapStateToProps,{sortProducts,fetchProducts})(Filter)