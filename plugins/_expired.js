import fs from 'fs'
import { readFileSync } from 'fs'
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        let text = `${monospace("====> P E N G U M U A N <====")}\n\nSudah waktunya *ktdprjct メ bot* untuk meninggalkan grup, jika ingin *Bot* stay di grup ini, silahkan sewa bot ke *Owner* wa.me/62895342581896`
        await this.sendHydrated(m.chat, text, author, fs.readFileSync('./src/logo.jpg'), waowner,`My Owner`, null, null, [[null, 'bye 👋'], [null, null]], null, { asLocation: true })
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
const monospace = (string) => {
  return '```' + string + '```'
}