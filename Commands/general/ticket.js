module.exports = {
  data: {
    name: 'ticket',
    usage: 'ticket',
    aliases: [],
    example: ['ticket']
  },
  run: async (client, message, args) => {
    if (message.channel.id !== '709172644238327919') return message.reply('Khusus untuk di channel <#709172644238327919> saja!');
    message.delete();
    client.db.ensure(message.author.id, {
      valid: true
    });
    
    if (client.db.get(message.author.id, 'ch')) return message.reply('Channel yang lama belum terhapus sebaiknya kami gunakan yang lama saja daripada buat baru!').then(m => m.delete({ timeout: 5000 }));
    
    client.db.set(message.author.id, {
      id: message.author.id,
      ch: `ticket-${message.author.discriminator}`
    });
    message.guild.channels.create(client.db.get(message.author.id, 'ch'), {
      type: 'text',
      topic: `Gunakan \`d!end\` untuk mengakhiri channel ticket!`,
      permissionOverwrites: [
        {
          id: message.guild.id,
          deny: ['VIEW_CHANNEL', 'SEND_MESSAGES']
        },
        {
          id: message.author.id,
          allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
        }
        ]
    }).then(channel => {
      channel.send({ embed: { color: 0xcfa, title: `${message.author.username} Ticket`, description: `**Halo ${message.author.username} silahkan ketik orderan atau keluhan serta pertanyaan mu disini.**`, footer: { text: `© Dream Hosting` }}});
      message.channel.send(`Ticket channel mu berhasil dibuat dengan nama: **<#${channel.id}> (${channel.name})**`).then(m => m.delete({ timeout: 5000 }));        
    });
  }
}