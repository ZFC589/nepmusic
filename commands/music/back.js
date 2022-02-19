module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, сейчас музыка не играет`);

        if (!queue.previousTracks[1]) return message.channel.send(`${message.author}, нет треков`);

        await queue.back();

        message.channel.send(`Трек переключен на предыдущий`);
    },
};