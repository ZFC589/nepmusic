const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);
if (!queue || !queue.playing) return message.channel.send(`${message.author}, сейчас музыка не играет`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`${message.author}, сначала отключите текущую музыку в режиме повтора (${client.config.app.px}loop)`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Режим повтора **${queue.repeatMode === 0 ? 'Включён' : 'Выключен'}** вся очередь будет повторятся` : `${message.author}, что-то пошло не так`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`${message.author}, сначала отключите текущую очередь в режиме повтора (${client.config.app.px}loop queue)`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Режим повтора **${queue.repeatMode === 0 ? 'Выключен' : 'Включён'}` : `${message.author}, что-то пошло не так`);
        };
    },
};