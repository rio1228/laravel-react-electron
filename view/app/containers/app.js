/**
 * Created by Ryo Mikami on 2017/08/10.
 */
import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers/index';
import PosApp from './posApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);//何をmiddlewareとして、使うのかを設定してる。多分この順番に通ってくる
const reducer = combineReducers(reducers);//combineReducersでreducerを作る
const store = createStoreWithMiddleware(reducer);//新しいstoreをつくるには、combineReducerでつくられたreducerをcreateStore()へ渡します。今回はmiddlewareを通してるけど

class App extends Component {

    render() {
        return (
            <div>
                <Provider store={store} >{/*store = {store}を記載することでProviderにstoreを登録したことになる*/}
                    <PosApp />{/*conecct()()を呼び出してる*/}
                </Provider>
            </div>
        )
    }
}
export default App;
