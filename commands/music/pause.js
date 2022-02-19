module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, сейчас музыка не играет`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Трек ${queue.current.title} поставлен на паузу` : `${message.author}, что-то пошло не так`);
    },
};