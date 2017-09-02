
import counter from './counter';

export {
  counter
};
// counterで記述したreducerをここでまとめてexportしてる
// つまり、複数のreducerをここに集めてしまって、containersのappに送ってしまえばいい。

// 流れ
// reducers/counter.jsでreducerを記述
// ↓
// reducers/index.jsでexpport
// ↓
// containers/app.jsでこれを全部まとめてimport
// ↓
// それをcombineReducersで合体させる