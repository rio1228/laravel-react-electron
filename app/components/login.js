/**
 * Created by Ryo Mikami on 2017/08/18.
 */
'use strict';
import React, {Component} from 'react';
// import AutoComplete from 'material-ui/AutoComplete'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { StyleSheet, css } from 'aphrodite'
import axios from 'axios'

const styles = StyleSheet.create({
    form: {
        margin: 'auto auto'
    }
})

class login extends Component {
    loginApi () {
        axios.get('http://homestead.app/login').then((res) => {
            console.log(res)
            alert(res.data)
        }).catch((e) => {
            console.log(e)
        })
    }

    render() {
        const loginApi = () => this.loginApi()
        return (
            <div className={css(styles.form)}>
                <p>ログイン</p>
                <input type='text' name="id" placeholder='ログインID'/>
                <input type='password' name="pass" placeholder='パスワード'/>
                <button onClick={loginApi}>ログイン</button>
            </div>
        )
    }
}

export default login;
