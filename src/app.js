const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const { Collection } = require("discord.js");
dotenv.config();

const { SlashCommandBuilder } = require("discord.js");

// Require the necessary discord.js classes

const { Client, Events, GatewayIntentBits } = require("discord.js");
const token = process.env.TOKEN;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  switch (interaction.commandName) {
    case "ping":
      await interaction.reply("Pong!");
      break;
    case "poggers":
      await interaction.reply("IAMPOGGERS");
      break;
  }
});

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);
