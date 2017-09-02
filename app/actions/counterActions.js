import * as types from './actionTypes';

export function increment() {{/*{type: types.INCREMENT} がactionのtypeを作成。これ(action)とstateをstoreへ送る*/}
  return {
    type: types.INCREMENT
  };
}

export function decrement() {{/*{type: types.DECREMENT} がactionのtypeを作成。これ(action)とstateをstoreへ送る*/}
  return {
    type: types.DECREMENT
  };
}
