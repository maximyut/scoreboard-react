const template = [
  ...(isDevelopment
    ? [{ role: 'fileMenu' }, { role: 'editMenu' }, { role: 'viewMenu' }, { role: 'windowMenu' }]
    : []),
  {
    label: 'Add scoreboard',
    click() {
      createScoreboard();
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
