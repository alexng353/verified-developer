const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("poggers")
    .setDescription("IAMPOGGERS"),
  async execute(interaction) {
    await interaction.reply("IAMPOGGERS");
  },
};
