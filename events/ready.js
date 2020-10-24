module.exports = async (client) => {
  console.log(`[API] has awaken as ${client.user.username}`);
  await client.user.setActivity("Music", {
    type: "STREAMING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
