import React, { Component } from 'react'
import classes from './Main.less'

class Main extends Component {
    state = {
        inputFlag: false
    }

    checkField(e) {
        // console.log(e.target.attributes)
        if(e.target.value !== '') {
            e.target.dataset.flag = true;
        } else {
            e.target.dataset.flag = false;
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.childNodes);
    }

    render() {
        return (
            <React.Fragment>
                <div style={{height: 400, textAlign: 'center', border: '1px solid black'}}>
                    <h1>Slider</h1>
                </div>

                <div style={{height: 400, textAlign: 'center', border: '1px solid black'}}>
                    <h1>Main Content</h1>
                </div>

                <div className="container">
                    <div className="page">
                        <h2 className="page__title">Customer Login</h2>

                        <div className="page__wrap">
                            <form className="form" onSubmit={this.onFormSubmit}>
                                <label className="form__row">
                                    <span className="form__label">Email</span>
                                    <input
                                        className="form__input"
                                        type="email"
                                        placeholder="your@email.com"
                                        data-flag={this.state.inputFlag}
                                        onChange={this.checkField}
                                    />
                                </label>

                                <label className="form__row">
                                    <span className="form__label">Password</span>
                                    <input
                                        className="form__input"
                                        type="password"
                                        data-flag={this.state.inputFlag}
                                        onChange={this.checkField}
                                    />
                                </label>

                                <div className="form__bottom">
                                    <input className="form__submit" type="submit" value="Submit" />
                                    <a href="#" className="form__link">Forgot your password?</a>
                                </div>
                            </form>

                            <div className="page__bottom">
                                New customer? <a href="#">Sign up for an account</a>
                            </div>
                        </div>
                    </div>

                    <div className="page">
                        <h2 className="page__title">Sign up</h2>

                        <div className="page__wrap">
                            <form className="form">
                                <label className="form__row">
                                    <span className="form__label">Email</span>
                                    <input className="form__input" type="email" placeholder="your@email.com" />
                                </label>

                                <label className="form__row">
                                    <span className="form__label">Password</span>
                                    <input className="form__input" type="password" />
                                </label>

                                <label className="form__row">
                                    <span className="form__label">Confirm password</span>
                                    <input className="form__input" type="password" />
                                </label>

                                <label className="form__row">
                                    <span className="form__label">Phone</span>
                                    <input className="form__input" type="tel" />
                                </label>

                                <label className="form__row">
                                    <span className="form__label">First Name</span>
                                    <input className="form__input" type="text" />
                                </label>

                                <label className="form__row">
                                    <span className="form__label">Last Name</span>
                                    <input className="form__input" type="text" />
                                </label>

                                <div className="form__bottom">
                                    <input className="form__submit" type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Main