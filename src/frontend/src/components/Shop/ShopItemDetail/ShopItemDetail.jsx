import React, { Component } from 'react'
import product from '../ShopItem/img/product.jpg'

class ShopItemDetail extends Component {
    addToBasket = () => {
        let name = this.props.match.params.name

        const goodsRaw = localStorage.getItem("basket")
        const goods = goodsRaw ? JSON.parse(goodsRaw) : []
        const good = goods.find(g => g.name === name)

        if(good) {
            good.number += 1
        } else {
            goods.push({ name, number: 1 })
        }

        localStorage.setItem("basket", JSON.stringify(goods))
    }

    render() {
        const { name, price} = this.props.match.params

        return (
            <div className="container">
                <div className="shop-item-detail">
                    <img className="shop-item-detail__img" src={product} alt="Product"  />

                    <div className="shop-item-detail__details">
                        <h3 className="shop-item-detail__brand">Raw Trader</h3>

                        <h1 className="shop-item-detail__title">{name}</h1>

                        <p className="shop-item-detail__price">{price} Почему-то не выводится цена</p>

                        <input
                            className="shop-item-detail__button"
                            type="submit"
                            value="Add to cart"
                            onClick={this.addToBasket}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopItemDetail