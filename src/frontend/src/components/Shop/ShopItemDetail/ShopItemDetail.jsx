import React, { Component } from 'react'
import product from '../ShopItem/img/product.jpg'

class ShopItemDetail extends Component {
    addToBasket = () => {
        let name = this.props.match.params.name
        if(localStorage.getItem('basket')) {
            let goods = JSON.parse(localStorage.getItem("basket"))
            let checkName = false

            for(let i = 0; i < goods.length; i++) {
                if(goods[i].name === name) {
                    checkName = true
                    break
                }
            }

            if(!checkName) {
                goods.push({name: name})
                localStorage.setItem("basket", JSON.stringify(goods))
            }
        } else {
            let goods = [
                {
                    name: name
                }
            ]

            localStorage.setItem("basket", JSON.stringify(goods))
        }
        // localStorage.clear()
    }

    render() {
        // // localStorage.clear()
        // let name = this.props.match.params.name
        // function addToBasket() {
        //     if(localStorage.getItem('basket')) {
        //         let goods = JSON.parse(localStorage.getItem("basket"))
        //         let checkName = false
        //
        //         for(let i = 0; i < goods.length; i++) {
        //             if(goods[i].name === name) {
        //                 checkName = true
        //                 break
        //             }
        //         }
        //
        //         if(!checkName) {
        //             goods.push({name: name})
        //             localStorage.setItem("basket", JSON.stringify(goods))
        //         }
        //     } else {
        //         let goods = [
        //             {
        //                 name: name
        //             }
        //         ]
        //
        //         localStorage.setItem("basket", JSON.stringify(goods))
        //     }
        // }

        return (
            <div className="container">
                <div className="shop-item-detail">
                    <img className="shop-item-detail__img" src={product} alt="Product"  />

                    <div className="shop-item-detail__details">
                        <h3 className="shop-item-detail__brand">Raw Trader</h3>

                        <h1 className="shop-item-detail__title">{this.props.match.params.name}</h1>

                        <p className="shop-item-detail__price">{this.props.match.params.price} Почему-то не выводится цена</p>

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