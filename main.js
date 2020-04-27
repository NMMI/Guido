// const server = require('server');

// const {get, post}  = server.router;

// server({port : 3000}, [
//     get('/', ctx => 'Ciao')
// ])

'use strict';

const guido_server = require('../LHF_rtc/web/guido_server.js');

// Android stuff
var instructions_text ="";

var back = require('androidjs').back;
back.on('Start', function(msg) {
    back.send('print',`Hello ${msg}`);
    server();
    back.send('print',`Hello ${msg}`);
//    require("openurl").open("https://127.0.0.1:4444");
    back.send('ip_list',instructions_text);


    // const open = require('open');
    // (async () => {
    // 	// Opens the URL in the default browser.
    // 	await open("https://127.0.0.1:4444", {app: 'google-chrome'});

    // 	// // Opens the URL in a specified browser.
    // 	// await open('https://sindresorhus.com', {app: 'firefox'});

    // 	// // Specify app arguments.
    // 	// await open('https://sindresorhus.com', {app: ['google chrome', '--incognito']});
    // })();
});
//
//server();



