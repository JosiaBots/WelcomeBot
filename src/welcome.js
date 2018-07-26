const discord = require('discord.js');
const client = new discord.Client();
const express = require('express');
const config = require("./config.json")

client.on('ready', () => {
    console.log('Welcome/Leave Message enabled!')
})



client.on("guildMemberAdd", (member) =>  {
  const guild = member.guild.
  member.guild.channels.find("name", "general").send(`${member.user}, Welcome to the server!`); 
  console.log(`${member.user} Joined`);
});

  client.on("guildMemberRemove", (member) => {
    const membertag = member.user.tag
    member.guild.channels.find("name", "general").send(`${membertag} has left the server!`);
    console.log(`${member.user} left `);
  });


  client.login(config.token);
               