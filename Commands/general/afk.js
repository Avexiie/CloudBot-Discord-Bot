module.exports = {
  data:{
    name:'afk',
    description:'Membuat mu sebagai orang yang AFK!',
    usage: 'afk [alasan]',
    example: ['afk Aku Ngambek'],
    aliases:[]
  },
  run: async (client,message,args) => {
    message.delete();
    let alasan = args.join(' ');
    if (!alasan) alasan = '**Tidak ada Alasan**';
    message.guild.members.cache.get(message.author.id).setNickname(`[AFK] ${message.author.username}`);
    client.db.set(message.author.id, { reason: alasan });
    message.channel.send(`Aku telah membuat mu AFK karena: ${alasan}`).then(m => m.delete({timeout:1000}));
  }
}