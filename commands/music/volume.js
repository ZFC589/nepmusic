const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, сейчас музыка не играет`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Громкость ${queue.volume} 🔊\n*Пожалуйста укажите число от **1** до **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`${message.author}, Уровень громкости уже установлен на ${vol}`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`${message.author}, Пожалуйста укажите число от **1** до **${maxVol}**`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Громкость изменена на  **${vol}**/**${maxVol}**% 🔊` : `${message.author}, что-то пошло не так`);
    },
};