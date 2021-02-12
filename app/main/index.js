import path from 'path';
import { app, crashReporter, BrowserWindow, Menu, webContents } from 'electron';
// const menu = require('./menu');

const isDevelopment = process.env.NODE_ENV === 'development';

let mainWindow;
let scoreboardWindow = null;
let forceQuit;

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
  compress: true,
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', async () => {
  if (isDevelopment) {
    await installExtensions();
  }

  const createMainWindow = () => {
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

    mainWindow.loadURL(`file://${__dirname}/../renderer/index.html`);
  };

  createMainWindow();

  const createScoreboard = () => {
    scoreboardWindow = new BrowserWindow({
      resizable: false,
      fullscreen: true,
      frame: false,
      title: 'scoreboard',
      show: false,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    scoreboardWindow.loadURL(`file://${__dirname}/../renderer/scoreboard.html`);
  };

  createScoreboard();

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
    } else {
      mainWindow.on('closed', () => {
        mainWindow = null;
      });
    }
  });

  const template = [
    ...(isDevelopment
      ? [{ role: 'fileMenu' }, { role: 'editMenu' }, { role: 'viewMenu' }, { role: 'windowMenu' }]
      : []),
    {
      label: 'Scoreboard',
      submenu: [
        {
          label: 'Add scoreboard',
          click() {
            if (!scoreboardWindow.isVisible()) {
              scoreboardWindow.show();
            }
          },
        },
        {
          label: 'Close scoreboard',
          click() {
            scoreboardWindow.hide();
          },
        },
      ],
    },
    {
      label: 'Console',
      click() {
        console.log(mainWindow.isVisible());
        console.log(scoreboardWindow.isEnabled());

        console.log(BrowserWindow.fromId(1));
      },
    },
  ];

  const context = (props) => [
    ...(isDevelopment
      ? [
          {
            label: 'Inspect element',
            click() {
              mainWindow.inspectElement(props.x, props.y);
            },
          },
        ]
      : []),
    {
      label: 'Add scoreboard',
      click() {
        createScoreboard();
      },
    },
  ];

  mainWindow.webContents.on('context-menu', (e, props) => {
    Menu.buildFromTemplate(context(props)).popup(mainWindow);
  });

  const mainMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(mainMenu);
});
