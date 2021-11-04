const Discord = require('discord.js');
//const { Client, Intents } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] });
const token = ('OTA1NjE2ODkzNTAxNjU3MTQ4.YYMrdA.JR-Oko-OSD5Q0KJZbwBMuD5VsS4');

client.login(token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

/*client.on('message', msg => {
  if(msg.content.toLowerCase() === 'ping') {
    msg.reply('pong');
  }
});*/

client.on('interactionCreate', async interaction => {

  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
})
