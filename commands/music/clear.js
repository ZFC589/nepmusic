module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, сейчас музыка не играет`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, в очереди нет треков`);

        await queue.clear();

        message.channel.send(`Очередь была очищена`);
    },
};