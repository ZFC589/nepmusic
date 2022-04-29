module.exports = {
    app: {
        px: '..',
        token: 'ODg2NTkyNzgwMDI0MDQxNDgy.YT313g.r2bxgok6GUs9vUix73hncBlzPco',
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
