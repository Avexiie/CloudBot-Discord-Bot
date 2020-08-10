module.exports = {
  data: {
    name: 'end',
    usage: 'end',
    example: ['end'],
    aliases: []
  },
  run: async (client, message, args) => {
    let ch = message.channel;
  
  if (ch.name.includes('ticket')) {
  if (message.guild.members.cache.find(x => ch.name.endsWith(ch.name))) {
    let org = client.users.cache.find(x => ch.name.endsWith(x.discriminator))//message.guild.members.cache.find(x => ch.name.endsWith(x.discriminator))
    message.guild.channels.cache.get(ch.id).delete();
    client.db.delete(org.id);
  }
  } else {
    message.channel.send('Tidak dapat menghapus channel karena ini bukan channel ticket!');
  }
  }
}