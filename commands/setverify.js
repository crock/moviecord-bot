const Auth = require('../utils/auth')
const Config = require('../utils/config')

exports.run = async (message, args) => {
   if (Auth.isAdmin(message.member)) {

        const msg = await message.channel.send(`
        >>> To ensure the security of this community, please react to this message with :tickets: emoji. This will award you with the Viewer role and you will gain access to the community's channels. Welcome to **MovieCord**! :popcorn:
        `)
        await msg.react('🎟')
        await Config.setVerifyMessage(msg.id)

        await message.delete();
      
   } else {
      message.reply('You must be the guild admin in order to run this command.');
   }
    
};