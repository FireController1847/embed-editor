# Description
Have you ever wanted to edit a Discord Embed quickly without re-writing the entire embed? Well here's your opportunity!

# How To Use
### This assumes you already know how to send an embed in Discord.js!
This is possibly the most simple way to edit an embed. Simply pass your message through the function, and it will output the embed object you can then send with .sendEmbed. Edit any properties you want along the way!

```javascript
// Import This Module
const MEtoRE = require("embed-editor");
// First we get the message ID, and find it using .fetchMessage.
msg.channel.fetchMessage("message ID with embed here").then(msg => {

  // Error if the message could not be found.
  if (!msg) return msg.channel.send("I couldn't find that message!");
  
  // Then, we set the embed variable using the function.
  let embed = MEtoRE(msg);
  
  // Now we can edit any properties we want. 
  // Check https://discord.js.org/#/docs/main/master/class/RichEmbed for more information.
  embed.title = "This is a new title!";
  embed.description = "Edit the description!";
  
  // It works like a normal embed object. The fields are an array!
  embed.fields[0] = {
    name: "New Title",
    value: "Edited Value"
  }
  // Edit the title and keep the same value.
  embed.fields[1] = {
    name: "New Title",
    value: fields[1].value
  }
  // Add a new field.
  embed.fields.push({
    name: "New Field",
    value: "This is a brand new never before seen field!"
  });
  
  // Finally, we send the message.
  msg.channel.sendEmbed(embed);
});
```
