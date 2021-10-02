let handler = async m => m.reply(`
┌〔 Undang Bot ke Grup 〕
├ 7 Hari / Rp 5,000
├ 30 Hari / Rp 15,000
└────

┌〔 Sewa Bot Via 〕
├ Pulsa, Emoney
└────

┌〔  Pulsa 〕
├ THREE [089626029135]
└────

┌〔 Emoney 〕
├ Dana [089626029135]
└────

┌〔 Penting 〕
├ Bot On 24 Jam
├ Fitur Group
├ Welcome Image
├ Anti Link
├ Auto kick
├ Anti Delete
├ Dll
├ Minat?
├ Chat Owner/Pemilik Bot
└────
`.trim())
handler.help = ['sewa']
handler.tags = ['info']
handler.command = ['sewa']

module.exports = handler
