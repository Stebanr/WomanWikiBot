const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
});
var prefix = config.prefix;

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix +"embed")) {
    const embed = new Discord.RichEmbed()
    .setDescription("Airi es una ninja femenina que puede desgarrar fácilmente al equipo enemigo con una movilidad excepcional.");

    message.channel.send({embed});
  }
});
client.login(process.env.NDM1MTkxNDcxMjA5OTcxNzIy.DbZ3Vg.HnD7w6eu3F5VZK5rrKLwgA_FvpM);
