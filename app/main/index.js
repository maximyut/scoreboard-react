import path from 'path';
import { app, crashReporter, BrowserWindow, Menu, ipcMain } from 'electron';

const isDevelopment = process.env.NODE_ENV === 'development';

let mainWindow = null;
let scoreboardWindow = null;
let forceQuit = false;



const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  for (const name of extensions) {
    try {
      await installer.default(installer[name], forceDownload);
    } catch (e) {
      console.log(`Error installing ${name} extension: ${e.message}`);
    }
  }
};

crashReporter.start({
  productName: 'YourName',
  companyName: 'YourCompany',
  submitURL: 'https://your-domain.com/url-to-submit',
  uploadToServer: false,
});

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', async () => {
  if (isDevelopment) {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 640,
    minHeight: 480,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile(path.resolve(path.join(__dirname, '../renderer/index.html')));

  const createScoreboard = () => {
    console.log(mainWindow);
    scoreboardWindow = new BrowserWindow({
      resizable: false,
      fullscreen: true,
      frame: false,
      title: 'scoreboard',
      webPreferences: {
        nodeIntegration: true,
      },
    });

    scoreboardWindow.on('close', function () {
      scoreboardWindow = null;
    });
    scoreboardWindow.webContents.on('before-input-event', (event, input) => {
      if (input.key === 'Escape') {
        scoreboardWindow.close();
      }
    });

    scoreboardWindow.loadFile(path.resolve(path.join(__dirname, '../renderer/scoreboard.html')));
  };

  // show window once on first load
  mainWindow.webContents.once('did-finish-load', () => {
    mainWindow.show();
  });

  mainWindow.webContents.on('did-finish-load', () => {
    if (process.platform === 'darwin') {
      mainWindow.on('close', function (e) {
        if (!forceQuit) {
          e.preventDefault();
          mainWindow.hide();
        }
      });

      app.on('activate', () => {
        mainWindow.show();
      });

      app.on('before-quit', () => {
        forceQuit = true;
      });
      mainMenuTemplate.unshift({});
    } else {
      mainWindow.on('closed', () => {
        mainWindow = null;
      });
    }
  });

  if (isDevelopment) {
    // auto-open dev tools
    mainWindow.webContents.openDevTools();

    // add inspect element on right click menu
    mainWindow.webContents.on('context-menu', (e, props) => {
      Menu.buildFromTemplate([
        {
          label: 'Inspect element',
          click() {
            mainWindow.inspectElement(props.x, props.y);
          },
        },
        {
          label: 'Add scoreboard',
          click() {
            createScoreboard();
          },
        },
      ]).popup(mainWindow);
    });
  }

  ipcMain.on('toggle', function (e, value) {
    scoreboardWindow.webContents.send('toggle', value);
  });
});

