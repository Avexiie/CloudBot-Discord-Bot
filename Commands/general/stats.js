const { MessageEmbed } = require("discord.js");
const os = require('os');

function parseDur(ms) {
    let seconds = ms / 1000;
    let days = parseInt(seconds / 86400);
    seconds = seconds % 86400;
    let hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    let minutes = parseInt(seconds / 60);
    seconds = parseInt(seconds % 60);
    
    if (days) {
      return `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
    }
    else if (hours) {
      return `${hours} jam ${minutes} menit ${seconds} detik`;
    }
    else if (minutes) {
      return `${minutes} menit ${seconds} detik`;
    }
    return `${seconds} detik`;
  }
module.exports = {
 data: {
 name: "stats",
 usage: "stats",
 example: [],
 aliases: []
 },
 run: async (client, message, args) => {
  let model = os.cpus()[0].model;
  let platfrom = os.type();
  let arch = os.arch();
  let release = os.release();
  let memory = `${((os.totalmem() - os.freemem()) / 2048 / 2048).toFixed(0)} GB / ${(os.totalmem() / 2048 / 2048).toFixed(0)} GB`;
  
 const embed = new MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`
    
         **- Name: ${client.user.username}**
         **- Tag: ${client.user.discriminator}**
         **- Platform: ${platfrom} ${arch}**
         **- CPU Model: ${model}**
         **- Release: \`${release}\`**
         **- Memory: \`${memory}\`**
         **- Uptime: \`${parseDur(client.uptime)}\`**
     `)
     .setFooter(`Requested from: ${message.author.tag}`);
     message.channel.send(embed);
 }
}