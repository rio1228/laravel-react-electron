# electron-template

## プロジェクトの作り方
1. gitから落とす
```
git clone https://github.com/rio1228/pos-electron.git
```
2. package.jsonをinstall
```
npm install
```
3. build
```

yarn build
```
4. start
```
yarn start
```
もしくは
```
npm run-script start
```
## ソースを更新する場合
#### 変更しないといけないところ
package.jsonのnameとcomponentの部分を自分のプロジェクトに合わせる
```package.json
"name": "electron-template"
"component": "asar pack ./out ./clipfmt.asar",
"package": "electron-packager ./ clipfmt --platform=darwin,win32 --arch=x64"
```
package.jsonを何かしら変更した場合は
```
npm install
```
プロジェクトをビルド
```
yarn build
```
もしくは
```
npm run-script build
```
プロジェクトを.asarファイルにまとめる
```
yarn component
```
プロジェクトをパッケージ化
```
yarn package
```

## package.jsonのscriptsの説明
```
start…electronをパッケージ化せずに起動。ただし、ディレクトリ構造的にbuildをしてからでないとエラーが出る。もしくは変更が反映されない
build…webpackでソースをまとめる
build-w…webpackするファイルの変更を監視
component…webpackでまとめたフォルダをasarファイルにまとめる
package…プロジェクトのパッケージ化
repackage…プロジェクトのパッケージ化(上書きする時に使う。一度パッケージ化した後は上書きにしないとエラーになる)
all-package…上記のbuild,component,packageをまとめたもの。
all-repackage…上記のbuildmcomponent,repackageをまとめたもの
```

## 注意点
winsowsの場合、macのプロジェクトのアプリをパッケージングしたい時はコマンドプロンプトを管理者権限で実行する必要がある
```
electron-packager {ソースィディスクリ} {アプリ名} --platform = {プラットフォーム} --arch = {コンテンツキー} [その他のオプション...]
```
・platform···すべて、linux、win32、darwinのいずれかを選択してください。
・「--all」は全部入りのパッケージです。
・「darwin」はmacのことです。複数選択はカンマ区切りです。
・arch・・・オール、ia32、x64のいずれかを選択してください
もしパッケージ化する際にエラーが出る場合、npmのバージョンが悪い可能性がある。
npm@5.2は今のところ安定してパッケージ化出来る(2017年8月18日現在)
```
install i -g npm@5.2
```