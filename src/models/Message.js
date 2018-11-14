const Guild = require('./Guild')
const TextChannel = require('./TextChannel')

module.exports = class Message {
  constructor(obj, addons, client) {
    this.id = obj.id
    if (obj.webhook.id) {
      this.author = obj.webhook_id
    } else {
      this.author = obj.author
      this.member = obj.member
    }
    
    this.content = obj.content
    this.cleaned; // Soon
    this.createdAt = new Date(obj.timestamp);
    if (obj.edited_timestamp != null) this.editedAt = new Date(obj.edited_timestamp);
    this.tts = obj.tts
    this.pinned = obj.pinned
    this.mentions = obj.mentions
    this.attachments = obj.attachments
    this.embeds = obj.embeds
    this.reactions = obj.reactions
    this.guild = new Guild(addons.guild)
    this.channel new TextChannel(addons.channel, client)
  } 
  
  async delete(timeout) {
    if (timeout && typeof (timeout) === 'number') {
      
    } else {
      
    }
  }
  
  async edit(str) {
    
  }
}
