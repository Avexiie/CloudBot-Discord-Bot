const { MessageEmbed } = require('discord.js');
//const { owners_id, bot_prefix } = require('../../../config.json')

exports.run = async (client, message, args, color) => {
  let bot_prefix = client.db.get(message.guild.id, 'prefixes');
  let owners_id = []
  let prefix = bot_prefix;
  if (!args[0]) {
    let module = client.helps.array();
    if(!owners_id.includes(message.author.id)) module = client.helps.array().filter(x => !x.hide);
    const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(client.user.username + ' Daftar Perintah', client.user.displayAvatarURL())
    .setDescription(`\nUntuk mengetahui informasi sesuatu perintah ketik \`${prefix}help <commands>\`\n`)
    .setFooter(`Jangan gabungkan <> dan [] dalam penggunaan perintah, [] ini adalah opsional dan <> adalah diharuskan.`)
    for (const mod of module) {
      embed.addField(`**${mod.name}**`, mod.commands.map(x => `\`${x}\``).join(', '));
    }
    return message.channel.send(embed);
  } else {
    let cmd = args[0];
    if (client.commands.has(cmd) || client.commands.get(client.aliases.get(cmd))) {
      let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
      let name = `${command.data.name}`;
      let desc = command.data.description;
      let aliases = command.data.aliases;
      let usage = `${prefix}${command.data.usage}`;
      let example = `${command.data.example.map(x => `> __**${x}**__`).join('\n')}`

      let embed = new MessageEmbed()
      .setThumbnail(message.guild.iconURL()) 
      .setTitle(`Command: ${name}`) 
      .addField('Deskripsi', desc ? desc : 'Tidak Ada Deskripsi.')
      .addField('Aliases', aliases[0] ? `${aliases.join(`, `)}` : `Tidak ada Alias`)
      .addField('Penggunaan', usage ? usage: `${name}`)
      .addField('Contoh', example) 
      .setFooter(`Jangan gunakan [] atau <> dalam penggunaan perintah.`) 
      .setColor(color) 
      return message.channel.send(embed);
    }
    if (!client.commands.has(cmd) || !client.commands.get(client.aliases.get(cmd))) {
			const xembed = new MessageEmbed()
			.setColor('#FF1000')
			.setTitle('Gua ga punya perintah ini ?!?');
			const search = client.commands.keyArray().filter(x => x.includes(args[0])).map(x => `> __**${x}**__`);
			search.length > 0 ? xembed.setDescription('**Apa yang kamu maksud ini? :**\n' + search.join('\n')) : undefined;
			return message.channel.send(xembed);
    } 
      //message.channel.send(`**${message.author.username}**, Command or command alias \`${cmd}\` was not found.`);
    
  }
}


exports.data = {
    name: 'help',
    description: 'Show all command list',
    usage: 'help [command]',
    aliases: ['h', 'halp'],
    example: 'help ping'
}