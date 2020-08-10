module.exports = {
  data: {
    name: 'addrole',
    description: 'Menambahkan role kepada seseorang!',
    usage: 'addrole <@user> <@role|nama role>',
    aliases:[],
    example: 'addrole @BetMoon @Owner'
  },
  run: async (client,message,args) => {
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Maaf kamu ga punya izin!');
                                      
    let user = message.mentions.users.first();
    if (!user) return message.reply('Mohon tag seseorang!');
    let role = message.mentions.roles.first().name || message.content.split(' ').slice(2).join(' ');
    if (!role) return message.reply("Mohon mention dong rolenya");
    
    let valid = message.guild.roles.cache.find(x => x.name === role);
    if (role) {
      if (message.guild.members.cache.get(user.id)._roles.includes(valid.id)) return message.reply('dia udah punya role tersebut!');
      message.guild.members.cache.get(user.id).roles.add(valid.id);
      message.channel.send(`**Role ${valid.name} telah ditambahkan ke ${user.tag}**`);
    } else {
      message.channel.send('maaf yah, role tersebut gada');
    }
  }
}