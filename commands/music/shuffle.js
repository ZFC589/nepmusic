module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, сейчас музыка не играет`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, нет музыки в очереди`);

        await queue.shuffle();

        return message.channel.send(`Очередь перемешана, играет: **${queue.tracks.length}**`);
    },
};