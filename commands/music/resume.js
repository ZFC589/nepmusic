module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, сейчас музыка не играет`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Трек ${queue.current.title} возобновлён` : `${message.author}, что-то пошло не так`);
    },
};