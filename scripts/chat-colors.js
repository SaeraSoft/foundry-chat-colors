Hooks.on("renderChatMessage", (chatMessage, html, messageData) => {
    console.log(chatMessage, html, messageData);
    html.classList.add('tpc-test');
});