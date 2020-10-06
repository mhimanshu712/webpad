require('dotenv').config()

const {Client} = require('discord.js')
const client = new Client();
const PREFIX = "$"

client.login(process.env.DISCORDJS_BOT_TOKEN)

client.on('message', (message)=>{
    if(message.author.bot) return

    console.log(message.content)
    if(message.content == "Hi" ){
        message.reply(`Hey there ${message.author.username}`)
    }

    if(message.content.startsWith(PREFIX)){
        const [CMD_NAME,...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/)

        if(CMD_NAME == 'kick'){
            if(!message.member.hasPermission('KICK_MEMBERS'))
                return message.reply('You do not have Permission')

            if(args.length === 0) return message.reply('Provide Id')
            const member = message.guild.members.cache.get()
            if(member){
                member.kick();
            }else{
                message.channel.send('Member not found');
            }
        }
    }
})