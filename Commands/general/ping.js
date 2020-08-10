module.exports = {
  data: {
    usage: 'ping',
    name: 'ping',
    aliases: [
      'pingpong'
     ],
    example: ['ping'],
    cooldown: '2'
  },
  run: async (client, message, args) => {
    let PING = client.ws.ping;
    message.channel.send(`
:ping_pong: Pong! (**${PING}ms**)
`);
  }
}