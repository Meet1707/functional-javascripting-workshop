function getShortMessages(messages) {
    var res = [];
    messages.filter((msg) => {
        if (msg.message.length < 50) 
            res.push(msg.message);
    });
    return res;
}