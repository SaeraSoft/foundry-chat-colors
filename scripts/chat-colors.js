Hooks.on("renderChatMessage", (chatMessage, html, messageData) => {
    console.log(chatMessage, html, messageData);
    html[0].classList.add('tpc-test');
});