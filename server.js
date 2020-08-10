/* Uptimer */
require('./Handler/CloudNation');


const { get } = require('node-superfetch')


function getUp(url) {
    get(url).then(result => {
    console.log(`[${result.status}]` + 'SENT PACKET TO ' + url);
    
    });
};



/* Required bot */
/*
let CloudBot = require('./Handler/CloudNation'),
      client = new CloudBot({
        disableEveryone: true
      });

//require('./Handler/Events')(client);
require('./Handler/Module')(client);

client.login(TOKEN)*/
