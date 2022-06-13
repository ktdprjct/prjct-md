let handler = async (m, { conn, usedPrefix }) => {
  try {
    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastadventure)
    let _timers = (3600000 - __timers)
    let timers = clockString(_timers)
    if (global.db.data.users[m.sender].health > 79) {
      if (new Date - global.db.data.users[m.sender].lastadventure > 3600000) {                         
        let armor = user.armor
        let rubah = user.rubah
        let kuda = user.kuda
        let kucing = user.kucing
        let serigala = user.serigala
        let _health = `${Math.floor(Math.random() * 101)}`.trim()
        let health = (_health * 1)
        let exp = `${Math.floor(Math.random() * 10000)}`.trim()
        let money = `${Math.floor(Math.random() * 100000)}`.trim()
        let _potion = ['1','2','3']
        let potion = pickRandom(_potion)
        let _sampah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50']
        let sampah = pickRandom(_sampah)
        let _diamond = ['1','2','3','4','5','6','7','8','9','10']
        let diamond = pickRandom(_diamond)
        let _common = ['1','2','3']
        let common = pickRandom(_common)
        let _uncommon = ['1','2','1','2']
        let uncommon = pickRandom(_uncommon)
        let _mythic = pickRandom(['1','3','1','1','2'])
        let mythic = (_mythic * 1)
        let _legendary = pickRandom(['1','3','1','1','2'])
        let legendary = (_legendary * 1)
        let itemrand = [`*Selamat anda mendapatkan item rare yaitu*\n${mythic} 🗳️ Mythic Crate`,`*Selamat kamu mendapatkan item rare yaitu*\n${legendary} 🗃️ Legendary Crate`]
        let rendem = `${pickRandom(itemrand)}`
        let name = await conn.getName(m.sender)
        let str = `
*${name}* Kamu telah berpetualang, dan sekarang nyawamu berkurang ❤️ -${health * 1} karena Kamu telah berpetualang sampai ${pickRandom(['Jepang', 'Korea', 'Bali', 'Amerika', 'Iraq', 'Arab', 'Pakistan', 'German', 'Finlandia', 'Ke bawa dunia mimpi', 'Ujung dunia', 'Mars', 'Bulan', 'Pluto', 'Matahari', 'Hatinya dia', '...'])} dan mendapatkan

✉️ *exp:* ${exp} 
💵 *money:* ${money}
🗑 *sampah:* ${sampah}${potion == 0 ? '' : `\n🥤 *Potion:* ` + potion + ''}${diamond == 0 ? '' : `\n💎 *diamond:* ` + diamond + ''}${common == 0 ? '' : `\n📦 *common:* ` + common + ''}${uncommon == 0 ? '' : `\n🎁 *uncommon:* ` + uncommon + ''}
`.trim()
        
        setTimeout(() => {
          conn.sendHydrated(m.chat, str, author, 'https://telegra.ph/file/0ad816a09fa00dd2f134c.jpg', linkgc, textnya, null, null, [['Inventory', '.Inventory']], m, { asLocation: true })                                 
        }, 0)
        setTimeout(() => {
           conn.reply(m.chat, rendem, m)
        }, 3000)
        
        user.health -= health * 1
        user.exp += exp * 1
        user.tiketcoin += 1
        user.money += money * 1
        user.potion += potion * 1
        user.diamond += diamond * 1
        user.common += common * 1 
        user.uncommon += uncommon * 1
        user.sampah += sampah * 1
        user.mythic += mythic * 1
        user.legendary += legendary * 1
        user.lastadventure = new Date * 1
      } else conn.reply(m.chat, `Anda sudah berpetualang dan kelelahan, silahkan coba *${timers}* lagi`, m)
    } else conn.reply(m.chat, 'Minimal 80 health untuk bisa berpetualang, beli nyawa dulu dengan ketik *' + usedPrefix + 'shop buy potion <jumlah>*\ndan ketik *' + usedPrefix + 'use potion <jumlah>*', m)
  } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
    }
  
}
handler.help = ['adventure', 'petualang', 'berpetualang']
handler.tags = ['rpg']
handler.command = /^(adventure|(ber)?petualang(ang)?)$/i

handler.limit = true
handler.group = true
handler.fail = null

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}