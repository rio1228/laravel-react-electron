/**
 * Created by Ryo Mikami on 2017/08/20.
 */
"use strict";
import React from 'react';
import { LineChart, Line } from 'recharts';
import { StyleSheet, css } from 'aphrodite'

const styles= StyleSheet.create({
    body: {
        textAlign: 'center',
        margin: '0 auto'
    }
})

const data = [
    {name: 'Page A', uv: 4000},
    {name: 'Page B', uv: 3000},
    {name: 'Page C', uv: 2000},
    {name: 'Page D', uv: 2780},
    {name: 'Page E', uv: 1890},
    {name: 'Page F', uv: 2390},
    {name: 'Page G', uv: 3490},
]
export const Home = () => {
    return (
        <div className={css(styles.body)}>
            <h1>Home</h1>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
        </div>
    )
}
export const Sale = () => {
    return (
        <div className={css(styles.body)}>
            <h1>売上分析</h1>
            {/*<div className={css(styles.body)}>ようこそ：user</div>*/}
        </div>

    )

}
export const Purchase = () => {
    return (
        <div className={css(styles.body)}><h1>販売分析</h1></div>
    )

}
export const Order = () => {
    return (
        <div className={css(styles.body)}><h1>発注管理</h1></div>
    )

}
export const Stock = () => {
    return (
        <div className={css(styles.body)}><h1>在庫管理</h1></div>
    )

}
export const Report = () => {
    return (  <div className={css(styles.body)}>
        <h1>日報</h1>

    </div>  )

}


export const SalesManage = () => {
    return (
        <div className={css(styles.body)}><h1>売上管理</h1></div>
    )

}
export const Logout = () => {
    return (
        <div className={css(styles.body)}>
            <h1>ログアウト</h1>
            <div className="logout-form">
                <form action="./logout" method="POST">
                    <p>本当にログアウトしますか</p>
                    <input type="submit" value='はい'/>
                </form>
            </div>
        </div>
    )
}
