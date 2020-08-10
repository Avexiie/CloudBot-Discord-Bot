module.exports = {
 data: {
  name: "clear",
  description: "Menghapus beberapa pesan.",
  usage: "clear <angka>",
  example: "clear 10",
  aliases: ["prune", "purge"]
 },
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Kamu tidak memiliki izin yang cukup!");
    else {
        if(!args[0] || args[0] <= 0) return message.reply("please give me a number between 1 to 100.");
  if(args[0] >= 101) return message.reply('I can only delete 100 messages at a time.');
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages`).then(msg => msg.delete(100));
  });
    }
  }
 
}