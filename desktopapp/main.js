const {app, BrowserWindow} = require('electron');
const url = require("url");
const path = require("path");


function createWindow()
{
 
    win = new BrowserWindow({
        width:600,
        height:600,
        backgroundColor:'red',
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    
    win.loadURL(url.format({
        pathname: path.join(__dirname, `/dist/index.html`),
        protocol: "file:",
        slashes: true
      }))
    //Uncomment for Chrome DevTools
    //win.webContents.openDevTools()

    win.on('closed',function(){
        win=null
    })

    
    
   
}
//create window on electron intialization
app.on('ready',createWindow)

    //on macOS specific close process
    app.on('window-all-closed',function()
    { 
        if(process.platform !== 'darwin')
        {
            app.quit()
        }
    })

    app.on('activate', function(){
        if(win==null)
        {
            createWindow()
        }
    })