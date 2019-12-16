const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("640649880293081117")
setInterval(function() {
channel.send(`gegegedgeqg`);
}, 30)
})

client.login(process.env.BOT_TOKEN);