/**
 * Created by ohs60275 on 2017/08/17.
 */
"use strict";
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Main from '../components/main';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

class CounterApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;
        return (
            <Main/>
        );
    }
}

export default connect(state => ({state: state.counter}),
    (dispatch) => ({actions: bindActionCreators(counterActions, dispatch)}))(CounterApp);
// increment(),decrement()をここで使ってる
/* react-reduxライブラリのconnectをimportして、ヘルパーのbindActionCreators()を使っている
 * これでactionをreducerに送る*/

