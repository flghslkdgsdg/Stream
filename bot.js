const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Welcome Again !");
 

          const devs = ['427611667631964180' , '' , ''];
          const adminprefix = "-";
          client.on('message', message => {
              var argresult = message.content.split(`).slice(1).join(' ');
                if (!devs.includes(message.author.id)) return;

            if (message.content.startsWith(adminprefix + 'st')) {
              client.user.setGame(argresult, "https://www.twitch.tv/Leevi");
                message.channel.sendMessage(:white_check_mark:   ${argresult}`)
            }
            });

client.login(process.env.TOKEN);
