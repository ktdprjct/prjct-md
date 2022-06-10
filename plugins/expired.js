let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0] || isNaN(args[0])) throw `Masukan angka mewakili jumlah hari!\n\ncontoh:\n${usedPrefix + command} 30`

    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    if (now < global.db.data.chats[who].expired) global.db.data.chats[who].expired += jumlahHari
    else global.db.data.chats[who].expired = now + jumlahHari
    m.reply(`Berhasil menetapkan hari kedaluarsa untuk *${await conn.getName(who)}* selama ${args[0]} hari..`)
}
handler.help = ['expired <day>']
handler.tags = ['owner']
handler.command = /^(expi(red)?|addsewa)$/i

handler.owner = true

export default handler