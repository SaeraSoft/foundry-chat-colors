const WHISPER_TYPE = 4;
const EMOTE_TYPE = 3;
const NORMAL_TYPE = 1;

Hooks.on("renderChatMessage", (chatMessage, html, messageData) => {
    console.log(chatMessage, html, messageData);
    const messageType = chatMessage.type;
    let customClass = '';
    switch (messageType) {
        case WHISPER_TYPE:
            customClass = 'tpc-whisper';
            break;
        case EMOTE_TYPE:
            customClass = 'tpc-emote';
            break;
        default:

    }
    html[0].classList.add(customClass);
});