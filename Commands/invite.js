module.exports = (message, args) => {
  let invitelink = new MessageEmbed()
    .setTitle('Invite Floofy Fluff')
    .setColor('GREEN')
    .setDescription(
      `You can invite me by clicking [here](https://discord.com/oauth2/authorize?client_id=713542823454048277&scope=bot%20applications.commands&permissions=2147483647)`);
  message.channel.send(invitelink);
};