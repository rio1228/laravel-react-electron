/**
 * Created by Ryo Mikami on 2017/08/17.
 */
"use strict";
import React, {Component} from 'react';
import Login from './login'

class main extends Component {

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <Login/>
                </div>
            </div>
        )
    }
}


export default main;
