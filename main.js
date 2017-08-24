/**
 * Created by Ryo Mikami on 2017/08/10.
 */
const electron = require('electron')
/**
 *  expressモジュールをロードし、インスタンス化してappに代入。*/
const express = require("express")
const app = express()
/**
 * コマンドプロンプトからlogを見れるようにするためのもの
 * ビルドする前にコメントアウトする
 * @type {morgan}
 */
const logger = require('morgan')
app.use(logger('dev'))
const cookieParser = require('cookie-parser')

/**
 * DB情報の設定
 */
const mysql = require('mysql')
let sql
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    port : 3306,
    database: 'test'
})
/**
 * end
 */

/**
 * urlencodedとjsonは別々に初期化する
 */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/**
 * htmlをレンダリングするためのもの
 */
const engine = require('consolidate');
app.set('views', __dirname + '/view/entry/');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

/**
 * path
 * @type {any}
 */
const routes = require( __dirname + '/controller/routes/index')
const login = require( __dirname + '/controller/routes/login')
/**
 * end
 */

/**
 * listen()メソッドを実行して3000番ポートで待ち受け。
 **/
const portNo = 3000
const portNo_laravel = 8000
const ip_address = '127.0.0.1'
app.listen(portNo, ip_address)
/**
 * end
 */

/**
 * セッションスタート
 */
const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 60 * 1000
    }
}))
// app.use(function(req, res, next){
//     res.locals.user = req.session.user;
//     next();
// });
/**
 * end
 */

/**
 * ユーザーがログインしているかのチェック
 * @param req
 * @param res
 * @param next
 */
const loginCheck = function(req, res, next) {
    // req.session.user = {name: '三上',id: ''}//開発中のみ
    if (req.session.user) {
        next()
    } else {
        res.redirect('/login')
    }
}
/**
 * end
 */

/**
 * 開発中のディレクトリ構造-start-
 * 開発中はこれをコメントから外す
 * これの役割は静的ファイルの置き場所がどこか指定してあげるもの
 * もう少しこれの指定は考えた方がいい気がする。
 */
app.use(express.static(__dirname + '/'))
/**
 * 開発中のディレクトリ構造-end-
 */

/**
 * ビルド後のディレクトリ構造- for windows - start
 * 開発中はコメントアウトする
 */
// app.use(express.static("./resources/app/"))
/**
 * ビルド後のディレクトリ構造- for windows - end
 */

/**
 * getからのルーティング-start
 */
app.get('/analysis/sale', (req,res) => {
    res.redirect('/');
})
app.get('/analysis/purchase', (req,res) => {
    res.redirect('/');
})
app.get('/management/order', (req,res) => {
    res.redirect('/');
})
app.get('/management/stock', (req,res) => {
    res.redirect('/');
})
app.get('/management/daily-report', (req,res) => {
    res.redirect('/');
})
app.get('/management/sale', (req,res) => {
    res.redirect('/');
})
app.get('/logout', (req,res) => {
    res.redirect('/');
})
/**
 * getからのルーティング-end
 */

/**
 * postからのルーティング-start
 */
app.post('/login', function(req, res) {
    let query_id = req.body.id
    let query_pass = req.body.pass
    // connection.connect()//書く必要がない
    sql = 'SELECT user_name from user where login_id = "' + query_id + '" and password = '+ query_pass
    connection.query(sql, (err, results, fields) => {
        if (err) throw err
        const numRows = results.length;

        if (numRows) {
            const id = results[0].login_id
            const name = results[0].user_name
            req.session.user = {name: name,id: id, auth: 'ok'};
            res.redirect('/');
        }else {
            // req.session.user = {auth: 'no'}
            res.redirect('/');
        }
        // connection.end()
    })
})
app.post('/logout', (req,res) => {
    req.session.destroy();
    res.redirect('/login');
})
/**
 * postからのルーティング-end
 */

/**
 * ルーティング-start-
 * app.use('このディレクトリに来たら','このディレクトリに遷移する')
 */
app.use('/login', login)  // 追加
app.use('/', loginCheck, routes)  // sessionCheckを前処理に追加
/**
 * ルーティング-end-
 */

/**
 * electron.appの場所-start-
 */
/**
 * Keep a global reference of the window object, if you don't, the window will
 * be closed automatically when the JavaScript object is garbage collected.
 * Electronのライフサイクルを定義
 */
let mainWindow //メインウィンドウを表す変数
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
/**
 * ウィンドウを作成してコンテンツを読み込む
 */
function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 800, height: 600,useContentSize: true,icon: __dirname + '/asset/img/icon.png',})
    // and load the index.html of the app.
    // mainWindow.loadURL(`http://${ip_address}:${portNo}/`)
    mainWindow.loadURL(__dirname+'/view/entry/index/index.html')
    // localStorage.getItem("message") ? mainWindow.loadURL(__dirname, '/view/entry/index/index.html') : mainWindow.loadURL(__dirname, '/view/entry/login/index.html')

    // デベロッパーツールを開く
    mainWindow.webContents.openDevTools()
    // Emitted when the window is closed.
    mainWindow.on('closed', electron.app.quit)
}
/**
 * This method will be called when Electron has finished
 * initialization and is ready to create browser windows.
 * Some APIs can only be used after this event occurs.
 */
electron.app.on('ready', createWindow)
// Quit when all windows are closed.
electron.app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron.app.quit()
    }
})
electron.app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})
/**
 * electron.appの場所-end-
 */

/**
 * プロセス間通信の場所-start-
 * 非同期プロセス通信
 * レンダラプロセスから呼び出される
 */
const {ipcMain} = require('electron')
ipcMain.on('async',( event, args ) =>{
    connection.connect()
    sql = 'SELECT * from user LIMIT 10'
    connection.query(sql, (err, rows, fields) => {
        if (err) throw err
        // レンダラプロセスへ送る
        event.sender.send('async-reply', rows)
    })
    connection.end()
})
// ipcMain.on('async-login',( event, args ) =>{
//     const query_id = args.id
//     const query_pass = args.password
//     console.log('async-login!');
//     connection.connect()
//     connection.query('SELECT k_no, k_name from kyak where k_id = "' + query_id + '" and k_pass = '+ query_pass, (err, results, fields) => {
//         if (err) throw err
//         const numRows = results.length;
//
//         if (numRows) {
//             id = results[0].k_no
//             name = results[0].k_name
//             event.sender.send('login-reply', 'true')
//         }else {
//             // レンダラプロセスへ送る
//             event.sender.send('login-reply', 'false')
//         }
//         connection.end()
//     })
// })
/**
 * プロセス間通信の場所-end-
 */