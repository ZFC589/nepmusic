module.exports = {
    app: {
        px: '+',
        token: 'OTI0OTg4Nzc0NTkxNjU1OTU3.Ycmk7Q.W-bUuQbUVG-4EK3HLYrvDVUTvO0',
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
