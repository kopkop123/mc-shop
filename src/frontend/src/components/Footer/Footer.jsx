import React, { Component } from 'react'
import classes from './Footer.less'

class Footer extends Component {
    render() {
        return (
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
                                <a href="#" className="footer__link"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="footer__link"><i className="fab fa-facebook-square"></i></a>
                                <a href="#" className="footer__link"><i className="fab fa-pinterest"></i></a>
                                <a href="#" className="footer__link"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="footer__link"><i className="fab fa-instagram"></i></a>
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
                        <span><i className="fab fa-cc-amex"></i></span>
                        <span><i className="fab fa-cc-mastercard"></i></span>
                        <span><i className="fab fa-paypal"></i></span>
                        <span><i className="fab fa-cc-visa"></i></span>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer