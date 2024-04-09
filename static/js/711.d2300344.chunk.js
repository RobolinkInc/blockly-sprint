(self.webpackChunkcodrone_blockly=self.webpackChunkcodrone_blockly||[]).push([[711],{9711:function(e,o,r){window.onbeforeunload=null,r.g.PRIMARY_SERVICE="c320df00-7891-11e5-8bcf-feff819cdc9f",r.g.WRITE_CHARACTERISTIC="c320df02-7891-11e5-8bcf-feff819cdc9f",r.g.NOTIIFY_CHARACTERISTIC="c320df01-7891-11e5-8bcf-feff819cdc9f",r.g.BLE_CANCEL_MSG="User cancelled the requestDevice() chooser.",r.g.MIN_REQ_MSG="Your hardware or operating system may not support BLE. Check minimum system requirements in the menu.",r.g.PROGRAM_IS_RUNNING=!1,r.g.RUN_ONLY_DISPLAY_BLOCKS=!1,r.g.DISPLAY_INTERVAL=!1,r.g.BATTERY_INTERVAL=null,r.g.CONNECTION_INTERVAL=null,r.g.KEY_PRESSED=[],r.g.DEVICE_TYPE="codrone_mini",r.g.HOSTNAME_URL="",r.g.ZUMI_IMPORT_STATEMENT="import sys\nsys.path.insert(0,'/home/pi/zumi/lib')\nimport Engine as engine\nimport Speaker as speaker\nimport Lights as lights\nimport Infrared as infrared\nimport Timer as timer\nimport Camera as camera\nimport Eyes as eyes\nimport Personality as personality\n\n",r.g.CODRONE_MINI_IMPORT_STATEMENT="import CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\n",r.g.CODRONE_IMPORT_STATEMENT="import CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair(drone.Nearest)\n\n",r.g.BACKGROUND_RUNNING=!1,r.g.ZUMI_CURRENT_VIEW="junior",r.g.ZUMI_URL="",r.g.URL_REDIRECT_VERSION_MENU="https://docs.robolink.com/docs/codrone-edu/blockly/changelog",r.g.URL_UPDATE_FIRMWARE_CONTROLLER="https://robolink.helpdocs.io/article/9f231ck3my-how-do-i-update-my-co-drone-edu-controller",r.g.URL_UPDATE_JROTC_FIRMWARE_CONTROLLER="https://robolink.helpdocs.io/article/ylrsovzws2-codrone-edu-jrotc-controller-firmware",r.g.URL_UPDATE_FIRMWARE_DRONE="https://robolink.helpdocs.io/article/bpkgu06cru-can-i-update-my-co-drone-edu",r.g.URL_UPDATE_JROTC_FIRMWARE_DRONE="https://robolink.helpdocs.io/article/d8zr66v6fj-codrone-edu-jrotc-drone-firmware",r.g.FIND_FIRMWARE_URL="https://codrone.robolink.com/firmwareVersion.json",r.g.FIND_FIRMWARE_JROTC_URL="https://codrone.robolink.com/firmwareJROTCVersion.json",r.g.HOLD={armCode:65,eyeCode:17,drone:34},r.g.OFF={armCode:64,eyeCode:16,drone:32},r.g.FLICKER={armCode:67,eyeCode:19,drone:35},r.g.FLICKER_DOUBLE={armCode:68,eyeCode:20,drone:36},r.g.DIMMING={armCode:69,eyeCode:21,drone:37},r.g.FLOW={armCode:70,eyeCode:22},r.g.REVERSE_FLOW={armCode:71,eyeCode:23},r.g.MIX={armCode:66,eyeCode:18},r.g.keyPressMap={},r.g.keydownCallback=null,r.g.RED="Red",r.g.YELLOW="Yellow",r.g.ENTER="Yellow",r.g.ORANGE="Orange",r.g.GREEN="Green",r.g.BLUE="Blue",r.g.INDIGO="Indigo",r.g.VIOLET="Violet",r.g.TAKEOFF=1,r.g.CRASH=2,r.g.UPSIDE_DOWN=3,r.g.LOW_BATTERY="LowBattery",r.g.START_TIME=0,r.g.Direction={LEFT:-1,RIGHT:1,BACKWARD:2,FORWARD:3,UP:4,DOWN:5},r.g.flip={LEFT:22,RIGHT:23,FRONT:20,REAR:21},r.g.Degree={ANGLE_30:30,ANGLE_45:45,ANGLE_60:60,ANGLE_90:90,ANGLE_120:120,ANGLE_135:135,ANGLE_150:150,ANGLE_180:180,ANGLE_210:210,ANGLE_225:225,ANGLE_240:240,ANGLE_270:270,ANGLE_300:300,ANGLE_315:315,ANGLE_330:330},r.g.Sequence={SQUARE:1,CIRCLE:2,TRIANGLE:3,ZIGZAG:4,SWAY:5,HOP:6,SPIRAL:7},r.g.displayValue={getHeight:"Program stopped",getBatteryPercentage:"Program stopped",getGyroAngles:"Program stopped"},r.g.displaySingleValue={getHeight:"Program stopped",getBatteryPercentage:"Program stopped",getGyroAngles:"Program stopped"},r.g.Sensors={GET_HEIGHT:{value:"getHeight",displayName:"Sensors.GET_HEIGHT"},GET_BATTERY_PERCENTAGE:{value:"getBatteryPercentage",displayName:"Sensors.GET_BATTERY_PERCENTAGE"},GET_GYRO_ANGLES:{value:"getGyroAngles",displayName:"Sensors.GET_GYRO_ANGLES"},DEFAULT_VALUE:{value:"getGyroAngles",displayName:"Sensors.GET_GYRO_ANGLES"}},"codrone_mini"===r.g.DEVICE_TYPE?r.g.Mode={None_:0,OFF:16,SOLID:34,STROBE:18,BLINK:35,BLINK_DOUBLE:36,DIMMING:37,PULSE:37,FADEIN:38,FADEOUT:39,REVERSE_PULSE:23,EndOfType:24}:r.g.Mode={None_:0,OFF:16,SOLID:18,STROBE:18,BLINK:19,BLINK_DOUBLE:20,DIMMING:21,PULSE:22,REVERSE_PULSE:23,EndOfType:24,Controller:32},r.g.Keyboard={BACKSPACE:8,ENTER:13,SPACEBAR:32,UP:38,DOWN:40,LEFT:37,RIGHT:39,_0:48,_1:49,_2:50,_3:51,_4:52,_5:53,_6:54,_7:55,_8:56,_9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90},r.g.SUFFIX_JUNIOR="_junior",r.g.SUFFIX_SENIOR="_senior",r.g.PREFIX_EVENTS="on",r.g.KEYPRESS_EVENT="whenKeyPress",r.g.COLORS={Blue:9,Green:51,Indigo:56,Orange:99,Red:114,Violet:135,Yellow:139},r.g.TEMPERATURE={celsius:"celsius",fahrenheit:"fahrenheit"},r.g.ANGLE={roll:"roll",pitch:"pitch",yaw:"yaw"},r.g.Note={C1:0,CS1:1,D1:2,DS1:3,E1:4,F1:5,FS1:6,G1:7,GS1:8,A1:9,AS1:10,B1:11,C2:12,CS2:13,D2:14,DS2:15,E2:16,F2:17,FS2:18,G2:19,GS2:20,A2:21,AS2:22,B2:23,C3:24,CS3:25,D3:26,DS3:27,E3:28,F3:29,FS3:30,G3:31,GS3:32,A3:33,AS3:34,B3:35,C4:36,CS4:37,D4:38,DS4:39,E4:40,F4:41,FS4:42,G4:43,GS4:44,A4:45,AS4:46,B4:47,C5:48,CS5:49,D5:50,DS5:51,E5:52,F5:53,FS5:54,G5:55,GS5:56,A5:57,AS5:58,B5:59,C6:60,CS6:61,D6:62,DS6:63,E6:64,F6:65,FS6:66,G6:67,GS6:68,A6:69,AS6:70,B6:71,C7:72,CS7:73,D7:74,DS7:75,E7:76,F7:77,FS7:78,G7:79,GS7:80,A7:81,AS7:82,B7:83,C8:84,CS8:85,D8:86,DS8:87,E8:88,F8:89,FS8:90,G8:91,GS8:92,A8:93,AS8:94,B8:95,EndOfType:96,Mute:238,Fin:255},r.g.DisplayPixel={Black:0,White:1,Inverse:2,Outline:3},r.g.DisplayLine={Solid:0,Dotted:1,Dashed:2},r.g.DisplayFont={LiberationMono5x8:0,LiberationMono10x16:1},r.g.SDMode={ALL_INACTIVE:0,ALL_ACTIVE:1,COLOR_INACTIVE:2,PARTIALLY_ACTIVE:3,DRONE_NOT_PAIRED:4},r.g.colorSelected=[{className:"boxItemColorRed",color:"#FF0000"},{className:"boxItemColorYellow",color:"#FFFF00"},{className:"boxItemColorGreen",color:"#00FF00"},{className:"boxItemColorCyan",color:"#ACE5EE"},{className:"boxItemColorBlue",color:"#1974d2"},{className:"boxItemColorPurple",color:"#5D3FD3"},{className:"boxItemColorWhite",color:"#FFFFFF"},{className:"boxItemColorBlack",color:"#000000"}],r.g.takeOffInProgress=!1}}]);