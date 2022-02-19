module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, сейчас музыка не играет`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`${message.author}, пожалуйста укажите фильтр\n${actualFilter ? `сейчас активен фильтр ${actualFilter} (Напишите **${client.config.app.px}filter ${actualFilter}** чтобы отключить его).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`${message.author}, такого фильтра нет\n${actualFilter ? `сейчас активен фильтр ${actualFilter}.\n` : ''}Выбирите фильтр из списка: ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`Фильтр ${filter} **${queue.getFiltersEnabled().includes(filter) ? 'Включён' : 'Выключен'}**`);
    },
};