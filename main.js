/**
 * Created by Ryo Mikami on 2017/08/10.
 */
const electron = require('electron')
const app = electron.app
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
    mainWindow.loadURL(__dirname+'/index.html')
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
app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', function () {
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

})
/**
 * プロセス間通信の場所-end-
 */