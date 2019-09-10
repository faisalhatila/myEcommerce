import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div className='row'>
                <div className="col-md-4">
                    <h6>{`${this.props.count} Products Found`}</h6>
                </div>
                <div className="col-md-4">
                    <label>
                        Order By &nbsp;
                        <select value={this.propssort} onChange={this.props.handleChangeSort}>
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
