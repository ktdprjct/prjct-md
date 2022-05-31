const { promises, readFileSync } = (await import('fs')).default
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default
let handler =  async(m, { conn }) =>{
 /*m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085713964963]
│ • Telkomsel [081319944687]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/BochilGaming
│ • Gopay [085713964963]
╰────
`.trim())*/ // Tambah sendiri kalo mau
let text = `
╭─「 Donasi • Non Pulsa 」
│ 
│ • Dana [0895342581896]
╰────`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
          hydratedTemplate: {
            hydratedContentText: text.trim(),
            locationMessage: { 
            jpegThumbnail: readFileSync('./src/logo.jpg') },
            hydratedFooterText: author,
            hydratedButtons: [
              {
                  urlButton: {
                      displayText: 'My Owner',
                      url: waowner
                  }
              },
              {
                  quickReplyButton: {
                      displayText: 'back to menu',
                      id: `.menu`
                  }
              }
            ]
          }
        }
      }), { userJid: m.sender, quoted: m });
      return await conn.relayMessage(
        m.chat,
        template.message,
        { messageId: template.key.id }
    )
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
