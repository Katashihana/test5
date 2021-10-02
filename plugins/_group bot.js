let handler = async m => m.reply(`
[Group Katashi Bot WhatsApp] 🚀
https://chat.whatsapp.com/H5JPkwbob5YH8x5Mpcxybm

[Nomer Katashi Bot WhatsApp] 🛸
https://wa.me/6289626029135?text=!menu

[Owner/Pemilik Katashi Bot Wa ] 🐥
http://wa.me/6289626029135
`.trim())
handler.help = ['mygroup']
handler.tags = ['info']
handler.command = ['mygroup', 'mygrup']

module.exports = handler
