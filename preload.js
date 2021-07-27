window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
})

window._ipcRenderer = require('electron').ipcRenderer;
window._remote = require('electron').remote;
window._platform = process.platform;


window.addEventListener('keydown', e => {
    console.log('%c 🍓 e: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', e);
    const { altKey, ctrlKey, metaKey, keyCode } = e;
    if (altKey && ctrlkey && metaKey && keyCode === 68) {
        const currentWindow = require('electron').remote.getCurrentWindow();
        currentWindow && currentWindow.toggleDevTools();
        e.preventDefault();
    }
}, false);