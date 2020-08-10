const { MessageEmbed } = require("discord.js");

module.exports = {
    data: {
        name: "panel",
        description: "Panel Link",
        usage: "panel",
        aliases: [],
        example: "panel",
    },
        run: async (bot, message, args) => {
            const panel = [
             "[Panel 01](https://cp1.dreamnodes.net)",
             "[Panel 02](https://cp2.dreamnodes.net)",
             "[Panel 03](https://cp3.dreamnodes.net)",
             "[Panel 04](https://cp4.dreamnodes.net)",
             "[Panel 05](https://cp5.dreamnodes.net)",
             "[Panel 06](https://cp6.dreamnodes.net)"
            ];
            
            const embed = new MessageEmbed()
            .setColor("BLUE")
            .setTitle("Panel List")
            .setDescription(panel.join("\n"))
            .setTimestamp();
            
            message.channel.send(embed);
        
    }
}