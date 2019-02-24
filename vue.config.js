module.exports = {
    assetsDir: 'static',
    css: {
        sourceMap: true,
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://kasta.ua',
                changeOrigin: true,
            },
        },
        port: 8030,
    },

};