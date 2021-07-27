const { app, BrowserWindow, globalShortcut } = require('electron')
const path = require('path')




function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: "ux项目管理工具",
        backgroundColor: "#66CD00",
        icon: "/Users/lcs/web/yuhangit/electron-demo/static/favicon.ico",
        webPreferences: {
            webSecurity: false,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    mainWindow.loadURL("https://www.99bill.com/seashell/website/tools/project-management/index.html#/user/login")

    // mainWindow.loadFile('index.html')
}
const createKeyBod = () => {
    const ret = globalShortcut.register('CommandOrControl+X', () => {
        mainWindow.webContents.openDevTools()
    })
    if (!ret) {
        console.log('注册失败')
    }
}

app.whenReady().then(() => {
    app.on("activate", function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
    createKeyBod()

}).then(createWindow)

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})