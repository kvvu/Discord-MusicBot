module.exports = async (client) => {
  console.log(`[API] has awaken as ${client.user.username}`);
  await client.user.setActivity("Music | t! ", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
