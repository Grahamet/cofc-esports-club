module.exports = messge => {
	client.on('message', msg => {
		if (msg.content === 'ping'){
			return msg.reply('Pong!')
		}
	})
}