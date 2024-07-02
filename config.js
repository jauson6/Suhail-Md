const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_19_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MixcbiAgICAgICAgODYsXG4gICAgICAgIDgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDM5LFxuICAgICAgICA3OCxcbiAgICAgICAgNTksXG4gICAgICAgIDg3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDksXG4gICAgICAgIDYxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDQxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICA4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NCxcbiAgICAgICAgNixcbiAgICAgICAgNjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTA3LFxuICAgICAgICA3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY5LFxuICAgICAgICA1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDI1LFxuICAgICAgICA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjams3OU1iemtrOEZlMXcydjZuekg4VDNoKzBBbkNpaGREUzNPT1JJOUN3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5Ykp5N1FvaFFraUhlVnRFbml4SGtnXCIsXG4gIFwicGhvbmVJZFwiOiBcImY1OTc1NTA4LTBhMDgtNDNjNy04NzExLTk3MDJlODU1YTllNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICA2NSxcbiAgICAgIDI1MCxcbiAgICAgIDEwNyxcbiAgICAgIDEyOSxcbiAgICAgIDcxLFxuICAgICAgMjEsXG4gICAgICAxODEsXG4gICAgICAxMTQsXG4gICAgICAxMTYsXG4gICAgICAyMzksXG4gICAgICAyMyxcbiAgICAgIDE5MCxcbiAgICAgIDE3MSxcbiAgICAgIDI0LFxuICAgICAgMjQxLFxuICAgICAgODYsXG4gICAgICA4NyxcbiAgICAgIDI1NSxcbiAgICAgIDE4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OSxcbiAgICAgIDgyLFxuICAgICAgMjYsXG4gICAgICAxODIsXG4gICAgICAyMDgsXG4gICAgICAyMzksXG4gICAgICAxMjMsXG4gICAgICA3MCxcbiAgICAgIDExNixcbiAgICAgIDUwLFxuICAgICAgMTYzLFxuICAgICAgMjQ2LFxuICAgICAgMTM1LFxuICAgICAgMzYsXG4gICAgICAxNTYsXG4gICAgICAxNzcsXG4gICAgICAyMjYsXG4gICAgICAyMjcsXG4gICAgICAxNzIsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0ZHTE45WldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY3MzkyOTQ4Mjo1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKCocKlQkXGpiDSpFXigqbigrhFxqZbVMy4aMy4Zcy4Ssy4Ycy4dcy4c8y4b8y4bl1cIixcbiAgICBcImxpZFwiOiBcIjkzMDcyMjkzNjQ2NDA5OjU3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00zQXBiOENFSVdyamJRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSEI2ejFidDgyWEpaYWV1eFVKMyt1Y1E4VVBibWE3RlZBYUZIbFM1bnB6ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuRWpNRHVFWW93REtteGtGV0xOY3dOK2J0dmdhdGh2RjNUeGxNUHRxMU9IS01OaVRLVzl5OVVLT0Fja2cwSzhEL2UrWGc0eUx6bFNNYTYvdXJ3aXhEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzOWxlOWVVWmdya0tpTjlUbGRKWjI1aUprV3JaYzhwaHVsZ3dHM3hqR2hzSWhraTJ0SlloeFVtQ1NnTVVwa2k1QlhONTA2RDZwenluRW9nZkExQStCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2NzM5Mjk0ODI6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4ODMxNDVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
