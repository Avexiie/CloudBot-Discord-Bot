exports.run = async (client, message, args) => {
  
  if (message.channel.type === "dm") return;
  
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**${message.author.username}**, sorry you can't use this command`).then(msg=>msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}**, Sorry i don't have permission \`MANAGE_ROLES\` for action!`).then(msg=>msg.delete(5000));

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return message.channel.send(`**${message.author.username}**,Sorry I can't find the member you mean!`).then(msg=>msg.delete(5000));
    
    let muterole = message.guild.roles.cache.find(x => x.name === 'Muted');
    if (!member.roles.has(muterole.id)) return message.channel.send(`**${message.author.username}**, he hasn't muted yet try to mute him first :)`).then(msg=>msg.delete(5000));
    await (member.roles.remove(muterole.id));
    message.channel.send(`<@${member.id}> congratulations you have been unmuteed.`);
}

exports.data = {
    aliases: [],
  cooldown:"4",
    name: "unmute",
    description: "Unmute seseorang agar bebas:u",
    usage: "unmute @mention",
  example: ["unmute @BetMoon"]
}