module.exports = {
  data: {
    name: 'ban',
    description: 'Memban seseorang agar tidak bisa gabung lagi di server ini.',
    usage: 'ban <@user> [alasan]',
    aliases: [],
    example: ['ban @FlockNet NgeBacot']
  },
  run: async (client,message,args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Waduh, kamu ga punya izin nih buat nge ban orang:)');
    let user = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]));
    if (!user) return message.reply('Mohon tag seseorang untuk di ban!');
    if (!user.banable) return message.reply('User tersebut gabisa dikick!');
    let reason = message.content.split(' ').slice(2).join(' ');
    if (!reason) reason = 'Tidak ada alasan!';
    message.guild.members.cache.get(user.id).ban();
    message.channel.send(`**${user.username} telah diban!**`);
    user.send(`😈 **Dadah, kamu udah diban ya!\nKarena:\`\`\`css\n${reason}\`\`\`**`);
  }
}