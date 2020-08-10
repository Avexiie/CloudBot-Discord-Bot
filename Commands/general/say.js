module.exports = {
  data: {
    usage: 'say <text>',
    name: 'say',
    aliases: [
      'said'
     ],
    example: ['say halo']
  },
  run: async (client, message, args) => {
    message.delete();
    let text = args.join(' ');
    if (!text) return args.missing(message, 'Mohon masukan teks!', module.exports.data);
    message.channel.send(text);
  }
}