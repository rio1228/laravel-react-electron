/**
 * Created by Ryo Mikami on 2017/08/20.
 */
"use strict";
import React, {Component} from 'react';
import {
    Switch,
    Route
}from 'react-router-dom'
import {Home,Order,Purchase,Report,SalesManage,Stock,Logout} from './contents-detail/contentsDetail'
import Sale from './contents-detail/Sale'

class contents extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/analysis/sale" component={Sale} />
                    <Route path="/analysis/purchase" component={Purchase} />
                    <Route path="/management/order" component={Order} />
                    <Route path="/management/stock" component={Stock} />
                    <Route path="/management/daily-report" component={Report} />
                    <Route path="/management/sale" component={SalesManage} />
                    <Route path="/logout" component={Logout} />
                </Switch>
        )
    }
}


export default contents;
