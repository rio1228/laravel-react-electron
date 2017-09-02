import * as types from '../actions/actionTypes';

/**
 * stateの初期設定。
 * これを設定するまではreducerではstateがundefinedになっているので、ここで初期設定をしてあげる必要がある
 * @type {{count: number}}
 */
const initialState = {
  // user: user
};
/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 * この例では、switchを使っていますが、プロジェクトごとにfunction mapのような違う変更するための補助メソッドを使うことが出来ます。
 */
export default function counter(state = initialState, action = {}) {
    /**
     * 一番初めはinitialStateが入っていて,actionには何も入っていないため、
     * defaultに行きstateのcount=0が呼び出され描画されている。
     * しかし、2度目以降は、なにかしらのactionが入っているためこのcase文のどちらかに移動する
     */
  switch (action.type) {
    case types.INCREMENT:{/*types.INCREMENTはINCREMENTという文字列が入っていた場合こちらの*/}
      // return {
      // // 「...」演算子により、複数の値を一つの配列にまとめる
      //   ...state,
      //   count: state.count + 10
      // };
      return Object.assign({},
        state, {
          count: state.count + 10
        });
    case types.DECREMENT:{/*types.INCREMENTはDECREMENTという文字列が入っていた場合こちらの*/}
      // return {
      //   ...state,
      //   count: state.count - 1
      // };
      return Object.assign({},
        state, {
          count: state.count - 1
        });
    default:
      return state;
  }
}
