import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on('createmessage'(message =>{
  if(user.author.bot) return;
  message.reply({
    content: `Hello ${message.author.username}!`
  })
}))

client.login(process.env.TOKEN)