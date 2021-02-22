import { ipcMain } from 'electron';

ipcMain.on('my', (event, arg) => {
	console.log(arg);
});
