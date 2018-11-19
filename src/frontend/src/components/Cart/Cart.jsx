import React, { Component } from 'react'
import classes from './Cart.less'
import product from '../Shop/ShopItem/img/product.jpg'

class Cart extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="page__title">Cart</h2>

                <form>
                    <table className="cart__table">
                        <thead>
                            <tr className="cart__table-header">
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="cart__table-row">
                                <td>
                                    <div className="cart__image-wrap">
                                        <a className="cart__image" href="#">
                                            <img src={product} alt="Product"  />
                                            <span></span>
                                        </a>
                                    </div>
                                    <div className="cart__wrap">
                                        <span className="cart__vendor">Raw Trader</span>
                                        <span className="cart__title"><a href="#">Hot and Spicy Nuts</a></span>
                                        <span className="cart__variant">200g</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="cart__money">$15.00</span>
                                </td>
                                <td>
                                    <input type="text" className="cart__input"/>
                                </td>
                                <td>
                                    <span>$15.00</span>
                                </td>
                                <td>
                                    <a className="cart__remove" href="#">x</a>
                                </td>
                            </tr>
                            <tr className="cart__table-row">
                                <td>
                                    <div className="cart__image-wrap">
                                        <a className="cart__image" href="#">
                                            <img src={product} alt="Product"  />
                                            <span></span>
                                        </a>
                                    </div>
                                    <div className="cart__wrap">
                                        <span className="cart__vendor">Raw Trader</span>
                                        <span className="cart__title"><a href="#">Hot and Spicy Nuts</a></span>
                                        <span className="cart__variant">200g</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="cart__money">$15.00</span>
                                </td>
                                <td>
                                    <input type="text" className="cart__input"/>
                                </td>
                                <td>
                                    <span>$15.00</span>
                                </td>
                                <td>
                                    <a className="cart__remove" href="#">x</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        <b>Note:</b> all cakes take <b>2-3 days</b> from ordering.
                    </p>

                    <div className="cart__tools">
                        <div className="cart__instructions">
                            <p>Enter time &amp; date for cake pickup below:</p>
                            <textarea className="cart__field"></textarea>
                        </div>

                        <div className="cart__totals">
                            <p className="cart__price"><span>$155.00</span></p>
                            <p className="cart__message">Excluding tax and shipping</p>

                            <div className="cart__checkout">
                                <input className="form__submit" type="submit" value="Check Out" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Cart