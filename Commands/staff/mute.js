exports.run = async (client, message, args) => {
 if (message.channel.type === "dm") return;
  message.delete()
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**${message.author.username}**, sorry you can't use this command`).then(msg=>msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}**, Sorry i don't have permission \`MANAGE_ROLES\` for action!`).then(msg=>msg.delete(5000));
//f (!message.guild.me.hasPermission("MANAGE_SERVER")) return message.reply("Missing permissions")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return message.channel.send(`**${message.author.username}**, sorry i can't find a user you mean`).then(msg=>msg.delete(5000));
  //  member.removeRoles(member.roles)
    let muterole = message.guild.roles.cache.find(x => x.name === 'Muted');
    if (!muterole) {
        try {
            muterole = await message.guild.roles.create({
                name: 'Muted',
                color: '#000000',
                permission: []
            });
            message.guild.channels.cache.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                  READ_MESSAGES: false,
                    ADD_REACTION: false,
                    CONNECT: false
                });
            });
        } catch(e) {
            console.log(e.message);
        }
    };

    if (member.roles.has(muterole.id)) return message.channel.send(`**${message.author.username}**, he already muted if he muted him twice.`).then(msg=>msg.delete(5000));
    await (member.roles.add(muterole.id));
    message.channel.send(`**${message.author.username}**, you muted <@${member.id}>.`);
}

exports.data= {
    aliases: [],
  cooldown: "4",
    name: "mute",
    description: "Mute seseorang agar koar2",
    usage: "mute @mention",
  example: ['mute @BetMoon']
}