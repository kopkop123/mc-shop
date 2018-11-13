import React, { Component } from 'react'
import product from './img/product.jpg'
import {withRouter} from 'react-router-dom'

class ShopItem extends Component {
    render() {
        return (
            <div className="shop-item">
                <div className="shop-item__img">
                    <img src={product} alt="Product"  />
                    <a className="shop-item__link" href="#"></a>

                    <div className="shop-item__overlay">
                        Quick shop
                    </div>
                </div>

                <h3 className="shop-item__brand">
                    <a href="#">Raw Trader</a>
                </h3>
                
                <h2 className="shop-item__title">
                    <a
                        href="#"
                        onClick={event => {
                            event.preventDefault()
                            this.props.history.push('/shop/' + this.props.name.toLowerCase())
                        }}
                    >
                        {this.props.name}
                    </a>
                </h2>

                <p className="shop-item__price">${this.props.price}</p>
            </div>
        )
    }
}

export default withRouter(ShopItem)