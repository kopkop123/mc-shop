import React, { Component } from 'react'
import classes from './App.less'
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

class App extends Component {

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
            <React.Fragment>
                <header className="header">
                    <div className="header__inner container">
                        <div className="header__top">
                            <a href="#"><img className='header__logo' src={logo} alt="Logo"/></a>

                            <nav className={`service-navigation ${this.state.showSearch ? "service-navigation--show-search" : ""}`}>
                                <form className="service-navigation__form" onClick={this.showSearchField}>
                                    <input type="text" className="service-navigation__input" placeholder="Search" />
                                    <input type="submit" className="service-navigation__submit" value="S" />
                                </form>
                                <a href="#" className="service-navigation__link" onClick={this.showSearchField}><FontAwesomeIcon icon="search" /> Search</a>
                                <a href="#" className="service-navigation__link"><FontAwesomeIcon icon="shopping-cart" />0 items</a>
                                <a href="#" className="service-navigation__link"><FontAwesomeIcon icon="user" />Login</a>
                            </nav>
                        </div>

                        <nav className="navigation">
                            <ul className="navigation__list">
                                <li className="navigation__list-item">
                                    <a href="#" className="navigation__link">Home</a>
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

                <div style={{height: 400, textAlign: 'center', border: '1px solid black'}}>
                    <h1>Slider</h1>
                </div>

                <div style={{height: 400, textAlign: 'center', border: '1px solid black'}}>
                    <h1>Main Content</h1>
                </div>

                <footer className="footer">
                    <div className="footer__inner container">
                        <div className="footer__info">
                            <div className="footer__item">
                                <h3 className="footer__title">Get in touch</h3>
                                <p className="footer__contact">
                                    <a href="tel:0478 692 008" className="footer__link">0478 692 008</a>
                                </p>
                                <p className="footer__contact">
                                    <a href="mailto:info@rawtrader.com.au" className="footer__link">info@rawtrader.com.au</a>
                                </p>
                            </div>

                            <div className="footer__item">
                                <h3 className="footer__title">Follow us out there</h3>

                                <div className="footer__social">
                                    <a href="#" className="footer__link">Tw</a>
                                    <a href="#" className="footer__link">Fb</a>
                                    <a href="#" className="footer__link">P</a>
                                    <a href="#" className="footer__link">G+</a>
                                    <a href="#" className="footer__link">In</a>
                                </div>
                            </div>

                            <div className="footer__item">
                                <h3 className="footer__title">Newsletter</h3>

                                <form className="footer__form">
                                    <input type="text" className="footer__input" placeholder="Email address" />
                                    <input type="submit" value="Submit" className="footer__submit"/>
                                </form>
                            </div>
                        </div>

                        <nav className="footer__navigation">
                            <a href="#" className="footer__link footer__link--bottom">Shop</a>
                            <a href="#" className="footer__link footer__link--bottom">About us</a>
                            <a href="#" className="footer__link footer__link--bottom">Contact</a>
                            <a href="#" className="footer__link footer__link--bottom">Blog</a>
                        </nav>

                        <div className="footer__payment">
                            <span>MasterCard</span>
                            <span>PayPal</span>
                            <span>Visa</span>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default App