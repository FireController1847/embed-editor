/**
 * @deprecated Since Discord v12 editing and sending of embeds has become available and this module is no longer required.
 */
module.exports = (msg) => {
  return console.error("The Embed-Creator module has been completely disabled due to Discord v12 editing being the same.");
  let ME = msg.embeds[0];
  if (!msg.embeds[0]) return "No Embed";
  let RE = {
    author: {
      name: (ME.author ? ME.author.name : ""),
      icon_url: (ME.author ? ME.author.iconURL : ""),
      url: (ME.author ? ME.author.url : "")
    },
    color: (ME.color ? ME.color : "0xFFFFFF"),
    description: (ME.description ? ME.description : ""),
    fields: [],
    footer: {
      "text": (ME.footer ? ME.footer.text : ""),
      "icon_url": (ME.footer ? ME.footer.iconURL : "")
    },
    timestamp: (ME.createdTimestamp ? new Date(ME.createdTimestamp) : ""),
    thumbnail: {
      url: (ME.thumbnail ? ME.thumbnail.url : "")
    },
    title: (ME.title ? ME.title : ""),
    url: (ME.url ? ME.url : "")
  }
  for (let i = 0; i < ME.fields.length; i++) {
    RE.fields.push({
      "name": ME.fields[i].name,
      "value": ME.fields[i].value,
      "inline": ME.fields[i].inline
    });
  }
  return RE;
}
