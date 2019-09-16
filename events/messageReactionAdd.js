const Config = require('../utils/config')

exports.run = (reaction, user) => {

    if(reaction.emoji.name !== "tickets" && reaction.message.id !== Config.getVerifyMessage()) { return }

    let userId = reaction.users.lastKey()

    let member = reaction.message.guild.members.find(val => val.id === userId)

    member.addRole('622896627719340032')
    
};