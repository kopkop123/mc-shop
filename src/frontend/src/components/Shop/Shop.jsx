import React, { Component } from 'react'
import classes from './Shop.less'
import ShopItem from './ShopItem/ShopItem'

class Shop extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="page__title">Shop</h2>
                <div className="shop">

                    <ShopItem
                        name="Banana Choc Top"
                        price="100.00"
                    />

                    <ShopItem
                        name="Apple Crumble"
                        price="140.00"
                    />
                </div>
            </div>
        )
    }
}

export default Shop