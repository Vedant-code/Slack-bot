const { App } = require('@slack/bolt');

const app = new App({
  token: SLACK_BOT_TOKEN,
  appToken: SLACK_APP_TOKEN,
  socketMode: true,
});

async function publishMessage(id, text) {
  try {
    // Call the chat.postMessage method using the built-in WebClient
    const result = await app.client.chat.postMessage({
      // The token you used to initialize your app
      token: SLACK_BOT_TOKEN,
      channel: id,
      text: text
      // You could also use a blocks[] array to send richer content
    });

    // Print result, which includes information about the message (like TS)
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
}


app.command('/forward', async({command, ack})=>{
   await ack();
    const messageText = command.text.toUpperCase();
   
    await publishMessage('C073S42RCDA', messageText);
});




(async () => {
  await app.start();
  console.log('⚡️ Bolt app started');
})();
