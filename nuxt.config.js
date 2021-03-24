import colors from 'vuetify/es5/util/colors'
require('dotenv').config();
const { API_KEY } = process.env;
const { API_KEY_SECRET } = process.env;
const { ACCESS_TOKEN } = process.env;
const { ACCESS_TOKEN_SECRET } = process.env;
export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - twitterPower',
        title: 'twitterPower',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    vue: {
        devtools: true
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend(config, ctx) {
            config.node = {
                fs: "empty"
            }
        }
    },

    // generate: {
    //     dir: 'public'
    // },

    //apiKey
    privateRuntimeConfig: {
        apiKey: API_KEY,
        apiKeySecret: API_KEY_SECRET,
        accessToken: ACCESS_TOKEN,
        accessTokenSecret: ACCESS_TOKEN_SECRET
    },
    publicRuntimeConfig: {
        apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : 'TBgyrVONaPhF1k5YQY5UKUioN',
        apiKeySecret: process.env.NODE_ENV !== 'production' ? API_KEY_SECRET : '4zntEEZQXerqaIlXO8blE7XjkBJDxRy7bfwQhuDawfWtNKGi0F',
        accessToken: process.env.NODE_ENV !== 'production' ? ACCESS_TOKEN : '1261575288162402304-4fiPMfVUZSnDCa9Ym34mJ250K2kqsz',
        accessTokenSecret: process.env.NODE_ENV !== 'production' ? ACCESS_TOKEN_SECRET : 'CYyKoYyAFklSOGD7AiaJ8cf70hWOz4p61vhuzQI4NKtPe'
    },
    extend(config, ctx) {
        // Run ESLint on save
        if (ctx.isDev && ctx.isClient) {
            config.module.rules.push({
                enforce: "pre",
                test: /\.(js|vue)$/,
                loader: "eslint-loader",
                exclude: /(node_modules)/
            })
        }
    }
}