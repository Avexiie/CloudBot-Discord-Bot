const { MessageEmbed } = require('discord.js');
module.exports = {
  data: {
    name: 'embedsay',
    description: 'Embed Say.',
    usage:'embedsay <text>',
    example: "embedsay halo",
    aliases: ["sayembed"]
  },
  run: async (client,message,args) => {
    message.delete();
    let txt = args.join(' ');
    if (!txt) return message.channel.send('Please provide a text!')
    .then(msg => msg.delete({timeout: 2000}));
    
    let embed = new MessageEmbed()
    .setColor('RANDOM')
    .setDescription(txt)
    .setAuthor(message.author.tag,message.author.displayAvatarURL());
    message.channel.send({ embed });
  }
}