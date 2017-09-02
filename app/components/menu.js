/**
 * Created by Ryo Mikami on 2017/08/17.
 */
"use strict";
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link
}from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

const styles= StyleSheet.create({
  menu: {
      color: '#3c8572',
      textDecorationLine: 'none'
  }
})

class menu extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const logout = () => this.logout()
        return (
            <nav className="nav-group">
                <h4 className="nav-group-title">
                    <span className="icon icon-home"/>
                    分析
                </h4>
                <span className="nav-group-item">
                    <span className="icon icon-home"/>
                    <Link to='/analysis/sale' className={css(styles.menu)}>
                        売上分析
                    </Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-download"/>
                    <Link to='/analysis/purchase' className={css(styles.menu)}>
                        販売分析
                    </Link>
                </span>
                <h4 className="nav-group-title">管理</h4>
                <span className="nav-group-item">
                    <span className="icon icon-folder"/>
                    <Link to='/management/order' className={css(styles.menu)}>
                        発注管理
                    </Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-signal"/>
                    <Link to='/management/stock' className={css(styles.menu)}>
                        在庫管理
                    </Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-print"/>
                    <Link to='/management/daily-report' className={css(styles.menu)}>
                        日報管理
                    </Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-cloud"/>
                    <Link to='/management/sale' className={css(styles.menu)}>
                        売上
                    </Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-cloud"/>
                    <Link to='/' className={css(styles.menu)}>
                         戻る
                    </Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-cloud"/>
                    <Link to='/logout' className={css(styles.menu)}>
                        ログアウト
                    </Link>
                </span>
            </nav>
        )
    }
}
export default menu;
