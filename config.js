module.exports = {
    app: {
        px: '..',
        token: 'ODg2NTkyNzgwMDI0MDQxNDgy.YT313g.R7K_fQcQkDo04NirBECxS0OSvdg',
        playing: 'by ZFCStar'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
