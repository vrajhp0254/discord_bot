import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on('createmessage'(message =>{
  if(user.author.bot) return;
  message.reply({
    content: `Hello ${message.author.username}!`
  })
}))

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (commandName === 'beep') {
    await interaction.reply('Boop!');
  }
});

client.login(process.env.TOKEN)