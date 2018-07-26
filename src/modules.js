const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")
const express = require('express');
const app = express();

//Modules
const welcome = require("./welcome.js");

client.login(config.token);
