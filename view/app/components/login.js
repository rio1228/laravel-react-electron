/**
 * Created by Ryo Mikami on 2017/08/18.
 */
'use strict';
import React, {Component} from 'react';
// import AutoComplete from 'material-ui/AutoComplete'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    form: {
        margin: 'auto auto'
    }
})

class login extends Component {

    render() {
        return (
            <div className={css(styles.form)}>
                <form action="./login" method="POST">
                    <p>ログイン</p>
                    <input type='text' name="id" placeholder='ログインID'/>
                    <input type='password' name="pass" placeholder='パスワード'/>
                    <input type="submit" value='ログイン'/>
                </form>
            </div>
        )
    }
}

export default login;
