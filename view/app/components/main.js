/**
 * Created by Ryo Mikami on 2017/08/17.
 */
"use strict"
import React, {Component} from 'react'
import Login from './login'

import Window from './window'


class main extends Component {
      render() {
        return (
            localStorage.getItem("hoge") ? <Window/> : <Login/>
        )
    }
}


export default main
