/**
 * Created by Ryo Mikami on 2017/08/24.
 */
"use strict";
import React, {Component} from 'react';

class Sale extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }

    localstrage () {
        // messageというキーに「こんにちはlocalStorage」という値を保存
        localStorage.setItem("message", "こんにちはlocalStorage")
        // messageというキーに保存した値を取得して表示
        console.log(localStorage.getItem("message"))
        // keyに対応するvalueを削除する
        localStorage.removeItem("message")
    }

    render() {
        const localStrage = () => this.localstrage()
        return (
            <div>
                <h1>売上分析</h1>
                < button  onClick={localStrage}>localstrage</button>
            </div>
        )
    }
}


export default Sale;
