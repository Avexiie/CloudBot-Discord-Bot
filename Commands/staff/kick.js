module.exports = {
  data:{
    name: 'kick',
    description: 'Menendang seseorang agar hilang dari perdaban:)',
    usage: 'kick <@user>',
    aliases: [],
    example: ['kick @Phantom204']
  },
  run: async (client,message,args) => {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Maaf ya kau gada izin!');
    let user = message.mentions.users.first();
    if (!user) return args.missing(message, 'Mohon tag seseorang!', module.exports.data);
    if (!user.kickable) return message.reply('Mohon maaf user tersebut tidak bisa di kick!');
    message.guild.members.cache.get(user.id).kick();
    message.channel.send(`**${user.username} telah di tendang, mampus:v**`);
    user.send(`**😴 Maaf kamu udah di kick dari server ini ya, dikarenakan alasan tertentu.**`);
  }
} 