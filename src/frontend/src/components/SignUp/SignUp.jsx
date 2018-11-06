import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        confirm: '',
        phone: '',
        firstname: '',
        lastname: ''
    }

    onFieldChange = (e) => {
        this.setState(Object.assign({}, this.state, {
            [e.target.name]: e.target.value
        }))
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        let result = true;
        for(let key in this.state) {
            if(this.state[key] === '') {
                result = false;
            }
        }

        if(result) {
            alert('Форма успешно отправлена')
        } else {
            alert('Все поля должны быть заполнены')
        }
    }

    render() {
        return (
            <div className="container">
                <div className="page">
                    <h2 className="page__title">Sign up</h2>

                    <div className="page__wrap">
                        <form className="form" onSubmit={this.onFormSubmit}>
                            <label className="form__row">
                                <span className="form__label">Email</span>
                                <input
                                    className="form__input"
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    onChange={this.onFieldChange}
                                />
                            </label>

                            <label className="form__row">
                                <span className="form__label">Password</span>
                                <input
                                    className="form__input"
                                    type="password"
                                    name="password"
                                    onChange={this.onFieldChange}
                                />
                            </label>

                            <label className="form__row">
                                <span className="form__label">Confirm password</span>
                                <input
                                    className="form__input"
                                    type="password"
                                    name="confirm"
                                    onChange={this.onFieldChange}
                                />
                            </label>

                            <label className="form__row">
                                <span className="form__label">Phone</span>
                                <input
                                    className="form__input"
                                    type="tel"
                                    name="phone"
                                    onChange={this.onFieldChange}
                                />
                            </label>

                            <label className="form__row">
                                <span className="form__label">First Name</span>
                                <input
                                    className="form__input"
                                    type="text"
                                    name="firstname"
                                    onChange={this.onFieldChange}
                                />
                            </label>

                            <label className="form__row">
                                <span className="form__label">Last Name</span>
                                <input
                                    className="form__input"
                                    type="text"
                                    name="lastname"
                                    onChange={this.onFieldChange}
                                />
                            </label>

                            <div className="form__bottom">
                                <input className="form__submit" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp