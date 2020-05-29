export default {
    css: [
        '@/assets/css/global.scss',
        '@/assets/css/indent.sass'
    ],
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400&display=swap' },
            { rel: 'favicon', href: 'favicon.ico' }
        ],
        bodyAttrs: {
            style: ['font-family: Roboto']
        }
    },
    plugins: [
        '@/plugins/global_components.js',
        '@/plugins/prototype.js',
        '@/plugins/utils.js',
    ],
    modules: [
        '@nuxtjs/axios',
    ],

}