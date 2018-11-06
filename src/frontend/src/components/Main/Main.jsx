import React, { Component } from 'react'
import classes from './Main.less'
import {Route, Switch} from 'react-router-dom'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact render={() => {
                        return (
                            <React.Fragment>
                                <div style={{height: 400, textAlign: 'center', border: '1px solid black'}}>
                                    <h1>Slider</h1>
                                </div>

                                <div style={{height: 400, textAlign: 'center', border: '1px solid black'}}>
                                    <h1>Main Content</h1>
                                </div>
                            </React.Fragment>
                        )
                    }} />

                    <Route path="/login" render={() => {
                        return (
                            <div className="container">
                                <div className="page">
                                    <h2 className="page__title">Customer Login</h2>

                                    <div className="page__wrap">
                                        <Login />
                                    </div>
                                </div>
                            </div>
                        )
                    }} />

                    <Route path="/register" render={() => {
                        return (
                            <div className="container">
                                <div className="page">
                                    <h2 className="page__title">Sign up</h2>

                                    <div className="page__wrap">
                                        <SignUp />
                                    </div>
                                </div>
                            </div>
                        )
                    }} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default Main