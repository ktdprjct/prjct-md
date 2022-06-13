import { xpRange } from '../lib/levelling.js'

let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  
  let health = user.health
  let armor = user.armor
  let pet = user.pet
  let kucing = user.kucing
  let _kucing = user.anakkucing
  let rubah = user.rubah
  let _rubah = user.anakrubah
  let serigala = user.serigala
  let _serigala = user.anakserigala
  let naga = user.naga
  let _naga = user.anaknaga
  let kuda = user.kuda
  let _kuda = user.anakkuda
  let phonix = user.phonix
  let _phonix = user.anakphonix
  let griffin = user.griffin
  let _griffin = user.anakgriffin
  let kyubi = user.kyubi
  let _kyubi = user.anakkyubi
  let centaur = user.centaur
  let _centaur = user.anakcentaur
  let diamond = user.diamond
  let potion = user.potion
  let ramuan = user.ramuan
  let common = user.common
  let makananpet = user.makananpet
  let makanannaga = user.makanannaga
  let makananphonix = user.makananphonix
  let makanangriffin = user.makanangriffin
  let makanankyubi = user.makanankyubi
  let makanancentaur = user.makanancentaur
  let uncommon = user.uncommon
  let mythic = user.mythic
  let legendary = user.legendary
  let level = user.level
  let money = user.money
  let exp = user.exp
  let sampah = user.sampah
  let anggur = user.anggur
  let jeruk = user.jeruk
  let apel = user.apel
  let mangga = user.mangga
  let pisang = user.pisang
  let bibitanggur = user.bibitanggur
  let bibitjeruk = user.bibitjeruk
  let bibitapel = user.bibitapel
  let bibitmangga = user.bibitmangga
  let bibitpisang = user.bibitpisang 
  let gardenboxs = user.gardenboxs
  let nabung = user.nabung
  let bank = user.bank
  let limit = user.limit
  let cupon = user.cupon
  let tiketcoin = user.tiketcoin
  let tiketm = user.healtmonster
  let aqua = user.aqua
  let expg = user.expg
  let boxs = user.boxs
  let botol = user.botol
  let kayu = user.kayu 
  let batu = user.batu
  let iron = user.iron
  let sword = user.sword
  let string = user.string
  let kaleng = user.kaleng
  let kardus = user.kardus
  let berlian = user.berlian
  let emas = user.emas
  let emaspro = user.emasbatang
  let hero = user.hero
  let exphero = user.exphero
  let { max } = xpRange(level, exp, global.multiplier)
  
  let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
  let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
  let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
  let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
  let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
  let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
  let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
  let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
  let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
  let usersmoney = sortedmoney.map(v => v[0])
  let usersdiamond = sorteddiamond.map(v => v[0])
  let userspotion = sortedpotion.map(v => v[0])
  let userssampah = sortedsampah.map(v => v[0])
  let userslevel = sortedlevel.map(v => v[0])
  let userscommon = sortedcommon.map(v => v[0])
  let usersuncommon = sorteduncommon.map(v => v[0])
  let usersmythic = sortedmythic.map(v => v[0])
  let userslegendary = sortedlegendary.map(v => v[0])
  let name = await conn.getName(m.sender)
  
  let str = `
Inventory *${name}*

❤️ *Health:* ${health}
🥼 *Armor:* ${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}
💵 *Money:* ${money}
🌌 *Limit:* ${limit}
🧬 *Level:* ${level}
✉️ *Exp:* ${exp}
🏦 *Atm:* ${bank}

=> *Inventory*
🧃 *Potion:* ${potion}
🌿 *Ramuan:* ${ramuan}
⛓️ *Iron:* ${iron}
🕸 *String:* ${string}
⚔️ *Sword:* ${sword}
🗑 *Sampah:* ${sampah}
🪵 *Kayu:* ${kayu}
🪨 *Batu:* ${batu}
🥤 *Aqua:* ${aqua}
🍖 *Makanan Pet:* ${makananpet}
🍖 *Makanan Phonix:* ${makananphonix}
🍖 *Makanan Naga:* ${makanannaga}
🍖 *Makanan Griffin:* ${makanangriffin}
🍖 *Makanan Kyubi:* ${makanankyubi}
🍖 *Makanan Centaur:* ${makanancentaur}
🎒 *Total inv:* ${diamond + potion + ramuan + sampah + kayu + sword + iron + string + makananpet + makananphonix + makanannaga + makanangriffin + makanankyubi + makanancentaur} item

=> *Crate*
📦 *Boxs:* ${boxs}
📦 *Common:* ${common}
🎁 *Uncommon:* ${uncommon}
🗳️ *Mythic:* ${mythic}
🗃️ *Legendary:* ${legendary}
🎁 *Pet:* ${pet}
📦 *Gardenboxs:* ${gardenboxs}

=> *Fruits*
🥭 *Mangga:* ${mangga}
🍇 *Anggur:* ${anggur}
🍌 *Pisang:* ${pisang}
🍊 *Jeruk:* ${jeruk}
🍎 *Apel:* ${apel}

=> *Seeds*
🌱 *Bibit Mangga:* ${bibitmangga}
🌱 *Bibit Anggur:* ${bibitanggur}
🌱 *Bibit Pisang:* ${bibitpisang}
🌱 *Bibit Jeruk:* ${bibitjeruk}
🌱 *Bibit Apel:* ${bibitapel}

=> *Trash Man*
📦 *Kardus:* ${kardus}
🛢️ *Kaleng:* ${kaleng}
🍾 *Botol:* ${botol}

=> *Mining*
👑 *Emas:* ${emas}
💍 *Berlian:* ${berlian}
💎 *Diamond:* ${diamond}

=> *Hero*
🦹🏻‍♂️ *My Hero:* ${hero == 0 ? 'Tidak Punya' : '' || hero == 1 ? 'Level 1' : '' || hero == 2 ? 'Level 2' : '' || hero == 3 ? 'Level 3' : '' || hero == 4 ? 'Level 4' : '' || hero == 5 ? 'Level 5' : '' || hero == 6 ? 'Level 6' : '' || hero == 7 ? 'Level 7' : '' || hero == 8 ? 'Level 8' : '' || hero == 9 ? 'Level 9' : '' || hero == 10 ? 'Level 10' : '' || hero == 11 ? 'Level 11' : '' || hero == 12 ? 'Level 12' : '' || hero == 13 ? 'Level 13' : '' || hero == 14 ? 'Level 14' : '' || hero == 15 ? 'Level 15' : '' || hero == 16 ? 'Level 16' : '' || hero == 17 ? 'Level 17' : '' || hero == 18 ? 'Level 18' : '' || hero == 19 ? 'Level 19' : '' || hero == 20 ? 'Level 20' : '' || hero == 21 ? 'Level 21' : '' || hero == 22 ? 'Level 22' : '' || hero == 23 ? 'Level 23' : '' || hero == 24 ? 'Level 24' : '' || hero == 25 ? 'Level 25' : '' || hero == 26 ? 'Level 26' : '' || hero == 27 ? 'Level 27' : '' || hero == 28 ? 'Level 28' : '' || hero == 29 ? 'Level 29' : '' || hero == 30 ? 'Level 30' : '' || hero == 31 ? 'Level 31' : '' || hero == 32 ? 'Level 32' : '' || hero == 33 ? 'Level 33' : '' || hero == 34 ? 'Level 34' : '' || hero == 35 ? 'Level 35' : '' || hero == 36 ? 'Level 36' : '' || hero == 37 ? 'Level 37'  : '' || hero == 38 ? 'Level 38' : '' || hero == 39 ? 'Level 39' : '' || hero == 40 ? 'Level MAX' : ''}

=> *Pet*
*Kucing:* ${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}
*Kuda:* ${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}
*Naga:* ${naga == 0 ? 'Tidak Punya' : '' || naga == 1 ? 'Level 1' : '' || naga == 2 ? 'Level 2' : '' || naga == 3 ? 'Level 3' : '' || naga == 4 ? 'Level 4' : '' || naga == 5 ? 'Level 5' : '' || naga == 6 ? 'Level 6' : '' || naga == 7 ? 'Level 7' : '' || naga == 8 ? 'Level 8' : '' || naga == 9 ? 'Level 9' : '' || naga == 10 ? 'Level 10' : '' || naga == 11 ? 'Level 11' : '' || naga == 12 ? 'Level 12' : '' || naga == 13 ? 'Level 13' : '' || naga == 14 ? 'Level 14' : '' || naga == 15 ? 'Level 15' : '' || naga == 16 ? 'Level 16' : '' || naga == 17 ? 'Level 17' : '' || naga == 18 ? 'Level 18' : '' || naga == 19 ? 'Level 19' : '' || naga == 20 ? 'Level MAX' : ''}
*Kyubi:* ${kyubi == 0 ? 'Tidak Punya' : '' || kyubi == 1 ? 'Level 1' : '' || kyubi == 2 ? 'Level 2' : '' || kyubi == 3 ? 'Level 3' : '' || kyubi == 4 ? 'Level 4' : '' || kyubi == 5 ? 'Level 5' : '' || kyubi == 6 ? 'Level 6' : '' || kyubi == 7 ? 'Level 7' : '' || kyubi == 8 ? 'Level 8' : '' || kyubi == 9 ? 'Level 9' : '' || kyubi == 10 ? 'Level 10' : '' || kyubi == 11 ? 'Level 11' : '' || kyubi == 12 ? 'Level 12' : '' || kyubi == 13 ? 'Level 13' : '' || kyubi == 14 ? 'Level 14' : '' || kyubi == 15 ? 'Level 15' : '' || kyubi == 16 ? 'Level 16' : '' || kyubi == 17 ? 'Level 17' : '' || kyubi == 18 ? 'Level 18' : '' || kyubi == 19 ? 'Level 19' : '' || kyubi == 20 ? 'Level MAX' : ''}
*Centaur:* ${centaur == 0 ? 'Tidak Punya' : '' || centaur == 1 ? 'Level 1' : '' || centaur == 2 ? 'Level 2' : '' || centaur == 3 ? 'Level 3' : '' || centaur == 4 ? 'Level 4' : '' || centaur == 5 ? 'Level 5' : '' || centaur == 6 ? 'Level 6' : '' || centaur == 7 ? 'Level 7' : '' || centaur == 8 ? 'Level 8' : '' || centaur == 9 ? 'Level 9' : '' || centaur == 10 ? 'Level 10' : '' || centaur == 11 ? 'Level 11' : '' || centaur == 12 ? 'Level 12' : '' || centaur == 13 ? 'Level 13' : '' || centaur == 14 ? 'Level 14' : '' || centaur == 15 ? 'Level 15' : '' || centaur == 16 ? 'Level 16' : '' || centaur == 17 ? 'Level 17' : '' || centaur == 18 ? 'Level 18' : '' || centaur == 19 ? 'Level 19' : '' || centaur == 20 ? 'Level MAX' : ''}
*Rubah:* ${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}
*Phonix:* ${phonix == 0 ? 'Tidak Punya' : '' || phonix == 1 ? 'Level 1' : '' || phonix == 2 ? 'Level 2' : '' || phonix == 3 ? 'Level 3' : '' || phonix == 4 ? 'Level 4' : '' || phonix == 5 ? 'Level 5' : '' || phonix == 6 ? 'Level 6' : '' || phonix == 7 ? 'Level 7' : '' || phonix == 8 ? 'Level 8' : '' || phonix == 9 ? 'Level 9' : '' || phonix == 10 ? 'Level 10' : '' || phonix == 11 ? 'Level 11' : '' || phonix == 12 ? 'Level 12' : '' || phonix == 13 ? 'Level 13' : '' || phonix == 14 ? 'Level 14' : '' || phonix == 15 ? 'Level MAX' : ''}
*Griffin:* ${griffin == 0 ? 'Tidak Punya' : '' || griffin == 1 ? 'Level 1' : '' || griffin == 2 ? 'Level 2' : '' || griffin == 3 ? 'Level 3' : '' || griffin == 4 ? 'Level 4' : '' || griffin == 5 ? 'Level 5' : '' || griffin == 6 ? 'Level 6' : '' || griffin == 7 ? 'Level 7' : '' || griffin == 8 ? 'Level 8' : '' || griffin == 9 ? 'Level 9' : '' || griffin == 10 ? 'Level 10' : '' || griffin == 11 ? 'Level 11' : '' || griffin == 12 ? 'Level 12' : '' || griffin == 13 ? 'Level 13' : '' || griffin == 14 ? 'Level 14' : '' || griffin == 15 ? 'Level MAX' : ''}
*Serigala:* ${serigala == 0 ? 'Tidak Punya' : '' || serigala == 1 ? 'Level 1' : '' || serigala == 2 ? 'Level 2' : '' || serigala == 3 ? 'Level 3' : '' || serigala == 4 ? 'Level 4' : '' || serigala == 5 ? 'Level 5' : '' || serigala == 6 ? 'Level 6' : '' || serigala == 7 ? 'Level 7' : '' || serigala == 8 ? 'Level 8' : '' || serigala == 9 ? 'Level 9' : '' || serigala == 10 ? 'Level 10' : '' || serigala == 11 ? 'Level 11' : '' || serigala == 12 ? 'Level 12' : '' || serigala == 13 ? 'Level 13' : '' || serigala == 14 ? 'Level 14' : '' || serigala == 15 ? 'Level MAX' : ''}

==> *Proges*
╭────────────────
│Level *${level}* To Level *${level}*
│Exp *${exp}* -> *${max}*
│
│Hero ${hero == 0 ? 'Tidak Punya' : '' || hero > 0 && hero < 40 ? `Level *${hero}* To level *${hero + 1}*\n│Exp *${exphero}* -> *${hero *500}*` : '' || hero == 40 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Rubah ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah *1000}*` : '' || rubah == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kucing ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing *1000}*` : '' || kucing == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kuda ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda *1000}*` : '' || kuda == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Naga ${naga == 0 ? 'Tidak Punya' : '' || naga > 0 && naga < 20 ? `Level *${naga}* To level *${naga + 1}*\n│Exp *${_naga}* -> *${naga *10000}*` : '' || naga == 20 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Phonix ${phonix == 0 ? 'Tidak Punya' : '' || phonix > 0 && phonix < 15 ? `Level *${phonix}* To level *${phonix + 1}*\n│Exp *${_phonix}* -> *${phonix *10000}*` : '' || phonix == 15 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kyubi ${kyubi == 0 ? 'Tidak Punya' : '' || kyubi > 0 && kyubi < 20 ? `Level *${kyubi}* To level *${kyubi + 1}*\n│Exp *${_kyubi}* -> *${kyubi *10000}*` : '' || kyubi == 20 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Centaur ${centaur == 0 ? 'Tidak Punya' : '' || centaur > 0 && centaur < 20 ? `Level *${centaur}* To level *${centaur + 1}*\n│Exp *${_centaur}* -> *${centaur *10000}*` : '' || centaur == 20 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Griffin ${griffin == 0 ? 'Tidak Punya' : '' || griffin > 0 && griffin < 15 ? `Level *${griffin}* To level *${griffin + 1}*\n│Exp *${_griffin}* -> *${griffin *10000}*` : '' || griffin == 15 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Serigala ${serigala == 0 ? 'Tidak Punya' : '' || serigala > 0 && serigala < 15 ? `Level *${serigala}* To level *${serigala + 1}*\n│Exp *${_serigala}* -> *${serigala *10000}*` : '' || serigala == 15? '*Max Level*' : ''}
╰────────────────\n\n
=> *Achievement*
1.Top level *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
2.Top Money *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
3.Top Diamond *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*
4.Top Potion *${userspotion.indexOf(m.sender) + 1}* dari *${userspotion.length}*
5.Top Common *${userscommon.indexOf(m.sender) + 1}* dari *${userscommon.length}*
6.Top Uncommon *${usersuncommon.indexOf(m.sender) + 1}* dari *${usersuncommon.length}*
7.Top Mythic *${usersmythic.indexOf(m.sender) + 1}* dari *${usersmythic.length}*
8.Top Legendary *${userslegendary.indexOf(m.sender) + 1}* dari *${userslegendary.length}*
9.Top Sampah *${userssampah.indexOf(m.sender) + 1}* dari *${userssampah.length}*
\n${readMore}
`.trim()
conn.sendHydrated(m.chat, str, author, 'https://telegra.ph/file/5bed485749a94af78d078.jpg', linkgc, textnya, null, null, [[ null ]], null, { asLocation: true })                                 

}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inv(entory)?|bal(ance)?|money|e?xp)$/i

handler.limit = true
handler.group = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)