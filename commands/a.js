
const logger = require("../logger");
const chalk = require("chalk");
module.exports = {
	aliases: ['a'],
	description: 'AAAAAAAAAAA',
	help: '`a`',
	execute,
};
async function execute(message, args) {
	message.channel.send("░░░░░▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░\n░░░▓▓▓▓▓▓▒▒▒▒▒▒▓▓░░░░░░░\n░░▓▓▓▓▒░░▒▒▓▓▒▒▓▓▓▓░░░░░\n░▓▓▓▓▒░░▓▓▓▒▄▓░▒▄▄▄▓░░░░\n▓▓▓▓▓▒░░▒▀▀▀▀▒░▄░▄▒▓▓░░░\n▓▓▓▓▓▒░░▒▒▒▒▒▓▒▀▒▀▒▓▒▓░░\n▓▓▓▓▓▒▒░░░▒▒▒░░▄▀▀▀▄▓▒▓░\n▓▓▓▓▓▓▒▒░░░▒▒▓▀▄▄▄▄▓▒▒▒▓\n░▓█▀▄▒▓▒▒░░░▒▒░░▀▀▀▒▒▒▒░\n░░▓█▒▒▄▒▒▒▒▒▒▒░░▒▒▒▒▒▒▓░\n░░░▓▓▓▓▒▒▒▒▒▒▒▒░░░▒▒▒▓▓░\n░░░░░▓▓▒░░▒▒▒▒▒▒▒▒▒▒▒▓▓░\n░░░░░░▓▒▒░░░░▒▒▒▒▒▒▒▓▓░░");
	if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
		logger.log('cmd',`A in ${connection.channel.guild}/${connection.channel.name}`);
		const dispatcher = connection.play('./assets/a.mp3', {
			volume: 0.5,
		});
		dispatcher.on('finish', () => {
			logger.log('cmd',`Finished A in ${connection.channel.guild}/${connection.channel.name}`);
			connection.disconnect();
			dispatcher.destroy();
		});
	}
}