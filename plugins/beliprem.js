let handler = async m => m.reply(`
┌─「 BELI PREMIUM 」
│ • perhari -
│ • perminggu 5k
│ • perbulan 15k
└────
┌─ 「 FITUR PREMIUM」
│ • Join Gc✓
│ • Bebas Edit Di Gc✓
│ • Kick Di Gc✓
│ • Jadi Bot✓
│ • DLLNya✓
└────
┌─「 *OWNER BOT* 」
│❏ 🪀 wa.me/6289626029135
└────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['beliprem']
handler.tags = ['info']
handler.command = ['beliprem']

module.exports = handler