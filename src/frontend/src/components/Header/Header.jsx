import React, { Component } from 'react'
import classes from './Header.less'
import {NavLink} from 'react-router-dom'
import logo from './img/logo.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
library.add(faShoppingCart)
import { faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faUser)
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronDown)

class Header extends Component {
    state = {
        showSearch: false
    }

    showSearchField = (e) => {
        e.preventDefault();

        this.setState(Object.assign({}, this.state, {
            showSearch: true
        }))
    }

    componentDidMount() {
        document.body.addEventListener('click', () => {
            this.setState(Object.assign({}, this.state, {
                showSearch: false
            }))
        })
    }

    render() {
        return (
            <header className="header">
                <div className="header__inner container">
                    <div className="header__top">
                        <NavLink to="/" exact><img className='header__logo' src={logo} alt="Logo"/></NavLink>

                        <nav className={`service-navigation ${this.state.showSearch ? "service-navigation--show-search" : ""}`}>
                            <form className="service-navigation__form" onClick={this.showSearchField}>
                                <input type="text" className="service-navigation__input" placeholder="Search" />
                                <button className="service-navigation__submit"><FontAwesomeIcon icon="search" /></button>
                            </form>
                            <a href="#" className="service-navigation__link" onClick={this.showSearchField}><FontAwesomeIcon icon="search" /> Search</a>
                            <a href="#" className="service-navigation__link"><FontAwesomeIcon icon="shopping-cart" />0 items</a>
                            <NavLink to="/login" className="service-navigation__link"><FontAwesomeIcon icon="user" />Login</NavLink>
                            <NavLink to="/admin/product" className="service-navigation__link">Product</NavLink>
                            <NavLink to="/shop" className="service-navigation__link">Shop</NavLink>
                        </nav>
                    </div>

                    <nav className="navigation">
                        <ul className="navigation__list">
                            <li className="navigation__list-item">
                                <NavLink to="/" exact className="navigation__link">Home</NavLink>
                            </li>
                            <li className="navigation__list-item navigation__list-item--dropdown">
                                <a href="#" className="navigation__link">Eat <FontAwesomeIcon icon="chevron-down" /></a>

                                <ul className="dropdown-menu">
                                    <li className="dropdown-menu__item">
                                        <a href="#" className="dropdown-menu__link">Granola</a>
                                    </li>
                                    <li className="dropdown-menu__item">
                                        <a href="#" className="dropdown-menu__link">Fruit &amp; Nuts</a>
                                    </li>
                                    <li className="dropdown-menu__item">
                                        <a href="#" className="dropdown-menu__link">Savoury Nuts</a>
                                    </li>
                                    <li className="dropdown-menu__item">
                                        <a href="#" className="dropdown-menu__link">Cakes</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="navigation__list-item navigation__list-item--dropdown">
                                <a href="#" className="navigation__link">Drink <FontAwesomeIcon icon="chevron-down" /></a>

                                <ul className="dropdown-menu">
                                    <li className="dropdown-menu__item">
                                        <a href="#" className="dropdown-menu__link">Coffee</a>
                                    </li>
                                    <li className="dropdown-menu__item">
                                        <a href="#" className="dropdown-menu__link">Herbal Tea</a>
                                    </li>
                                    <li className="dropdown-menu__item">
                                        <a href="#" className="dropdown-menu__link">Hot Drink Mixes</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="navigation__list-item">
                                <a href="#" className="navigation__link">Wholesale</a>
                            </li>
                            <li className="navigation__list-item navigation__list-item--dropdown">
                                <a href="#" className="navigation__link">About Us <FontAwesomeIcon icon="chevron-down" /></a>

                                <ul className="dropdown-menu">
                                    <li className="dropdown-menu__item">
                                        <a href="#" className="dropdown-menu__link">About Raw Trader</a>
                                    </li>
                                    <li className="dropdown-menu__item">
                                        <a href="#" className="dropdown-menu__link">Health Benefits</a>
                                    </li>
                                    <li className="dropdown-menu__item">
                                        <a href="#" className="dropdown-menu__link">Cafe Menu</a>
                                    </li>
                                    <li className="dropdown-menu__item">
                                        <a href="#" className="dropdown-menu__link">Events</a>
                                    </li>
                                    <li className="dropdown-menu__item">
                                        <a href="#" className="dropdown-menu__link">Catering</a>
                                    </li>
                                    <li className="dropdown-menu__item">
                                        <a href="#" className="dropdown-menu__link">Merch &amp; Gifts</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="navigation__list-item">
                                <a href="#" className="navigation__link">Blog</a>
                            </li>
                            <li className="navigation__list-item">
                                <a href="#" className="navigation__link">Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header