# electron-demo

## 一个 electron 的桌面应用程序 demo

```
可以将集成已完成的前端项目，或者外链链接
```

### 初始化

```
miker xxx
然后cd xxx
执行npm init -y
然后yarn add electron（将你的源切到yarn https://registry.yarnpkg.com/）
在package.json 添加运行命令  "start": "electron .",
然后新建 index.js
添加 const { app, BrowserWindow, globalShortcut } = require('electron')
BrowserWindow:  初始化相关配置，
globalShortcut: 全局键盘操作
app: 应用相关
```

### 添加关键代码

```
mainWindow.loadURL("http://localhost:8000") 这个是外链你外部程序的
如果你不想外链，可以用
mainWindow.loadFile('index.html') 或者 mainWindow.loadFile('build/index.html')
```

### 像浏览器一样打开 devtool

```
const ret = globalShortcut.register('CommandOrControl+X', () => {
        mainWindow.webContents.openDevTools()
    })
    CommandOrControl+X:键盘操作快捷键可以自己配置
```

### 本地运行

```
先开启本地要运行的项目。
然后再到 切到桌面应用下运行 yarn start
```

### 打包

```
yarn add @electron-forge/cli --save-dev
  等待安装完毕
  .
  .
  .
  Done ~
然后执行
npx electron-forge import

然后会出现 Thanks for using "electron-forge"!!! 这么一句话就代表成功

然后执行 npm run make
可以在out 目录下看到打包出来的Mac os 平台的包和windows 平台的包
```
