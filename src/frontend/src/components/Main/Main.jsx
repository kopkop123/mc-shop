import React, { Component } from 'react'
import classes from './Main.less'
import {Route, Switch} from 'react-router-dom'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import Home from '../Home/Home'
import Product from  '../Admin/Product/Product'

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={SignUp} />
                    <Route path="/admin" render={({match: {url}}) => {
                        return (
                            <Switch>
                                <Route path={`${url}/product`} component={Product} />
                            </Switch>
                        )
                        }}
                    />
                </Switch>
            </React.Fragment>
        )
    }
}

export default Main