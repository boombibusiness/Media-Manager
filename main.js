const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 880,
        minWidth: 950,
        minHeight: 650,
        backgroundColor: '#0f0f0f',
        title: "Media Downloader",
        icon: path.join(__dirname, 'icon.png'),
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('index.html');
}

// Native Windows Folder Selector Handler
ipcMain.handle('select-folder', async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
        properties: ['openDirectory'],
        title: 'Select Destination / Project Folder'
    });
    if (result.canceled) return null;
    return result.filePaths[0];
});

// Always On Top Handler
ipcMain.on('set-always-on-top', (event, isAlwaysOnTop) => {
    if (mainWindow) {
        mainWindow.setAlwaysOnTop(isAlwaysOnTop);
    }
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
