module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, сейчас музыка не играет`);

        message.author.send(`Трек **${queue.current.title} | ${queue.current.author}** успешно созранён`).then(() => {
            message.channel.send(`Трек сохранён`);
        }).catch(error => {
            message.channel.send(`${message.author}, невозможно написать  вам в личные сообщения`);
        });
    },
};