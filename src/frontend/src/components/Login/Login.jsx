import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: '',
        password: ''
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
            <React.Fragment>
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

                    <div className="form__bottom">
                        <input className="form__submit" type="submit" value="Submit" />
                        <a href="#" className="form__link">Forgot your password?</a>
                    </div>
                </form>

                <div className="page__bottom">
                    New customer? <a href="#">Sign up for an account</a>
                </div>
            </React.Fragment>
        )
    }
}

export default Login