import path from 'path';
import { app, crashReporter, BrowserWindow, Menu, webContents } from 'electron';
// const menu = require('./menu');
import configureStore from '../renderer/redux/store';

// import installExtension, {
//   REACT_DEVELOPER_TOOLS,
//   REDUX_DEVTOOLS,
//   REACT_PERF,
// } from 'electron-devtools-installer';

const isDevelopment = process.env.NODE_ENV === 'development';

let mainWindow;
let scoreboardWindow = null;
let forceQuit;

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
  // if (isDevelopment) {
  //   app.whenReady().then(() => {
  //     installExtension(REDUX_DEVTOOLS)
  //       .then((name) => console.log(`Added Extension:  ${name}`))
  //       .catch((err) => console.log('An error occurred: ', err));
  //     installExtension(REACT_DEVELOPER_TOOLS)
  //       .then((name) => console.log(`Added Extension:  ${name}`))
  //       .catch((err) => console.log('An error occurred: ', err));
  //   });
  // }

  const createMainWindow = () => {
    mainWindow = new BrowserWindow({
      width: 1000,
      height: 800,
      minWidth: 640,
      minHeight: 480,
      show: false,
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true,
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
        enableRemoteModule: true,
      },
    });

    scoreboardWindow.loadURL(`file://${__dirname}/../renderer/scoreboard.html`);
  };

  createScoreboard();

  scoreboardWindow.on('close', () => {
    createScoreboard();
  });

  mainWindow.on('closed', function () {
    app.quit();
  });

  mainWindow.webContents.once('did-finish-load', () => {
    mainWindow.show();
  });

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

  const state = {};

  const store = configureStore(state, 'main');

  // ipcMain.on('sync-state', (e) => {
  //   scoreboardWindow.webContents.send(store.getState());
  // });
});
