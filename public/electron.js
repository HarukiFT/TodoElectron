const electron = require("electron");
const {app, BrowserWindow} = electron;
const path = require("path");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        title: 'Тудушечка',
        width: 900,
        height: 680,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    mainWindow.loadURL(`file://${path.join(__dirname, "../build/index.html")}`)
    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
