module.exports = {
    app: {
        px: '*',
        token: 'OTQ3Nzc4MTU5NDM5Mzk2OTA0.YhyNMg.DaNO_I3JYBiQA_TGFTdN7ayuDQQ',
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
