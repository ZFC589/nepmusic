module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, сейчас музыка не играет`);

        const success = queue.skip();

        return message.channel.send(success ? `Трек ${queue.current.title} пропущен` : `${message.author}, что-то пошло не так`);
    },
};