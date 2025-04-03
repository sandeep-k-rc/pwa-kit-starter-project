/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const sites = require('./sites.js')
module.exports = {
    app: {
        // Customize settings for your url
        url: {
            // Determine where the siteRef is located. Valid values include 'path|query_param|none'. Defaults to: 'none'
            // site: 'none',
            // Determine where the localeRef is located. Valid values include 'path|query_param|none'. Defaults to: 'none'
            locale: 'none',
            // This boolean value dictates whether default site or locale values are shown in the url. Defaults to: false
            // showDefaults: true,
            // This boolean value dictates whether the plus sign (+) is interpreted as space for query param string. Defaults to: false
            interpretPlusSignAsSpace: false
        },
        login: {
            passwordless: {
                // Enables or disables passwordless login for the site. Defaults to: false
                enabled: false,
                // The callback URI, which can be an absolute URL (including third-party URIs) or a relative path set up by the developer.
                // Required in 'callback' mode; if missing, passwordless login defaults to 'sms' mode, which requires Marketing Cloud configuration.
                // If the env var `PASSWORDLESS_LOGIN_CALLBACK_URI` is set, it will override the config value.
                callbackURI:
                    process.env.PASSWORDLESS_LOGIN_CALLBACK_URI || '/passwordless-login-callback',
                // The landing path for passwordless login
                landingPath: '/passwordless-login-landing'
            },
            social: {
                // Enables or disables social login for the site. Defaults to: false
                enabled: false,
                // The third-party identity providers supported by your app. The PWA Kit supports Google and Apple by default.
                // Additional IDPs will also need to be added to the IDP_CONFIG in the SocialLogin component.
                idps: ['google', 'apple'],
                // The redirect URI used after a successful social login authentication.
                // This should be a relative path set up by the developer.
                // If the env var `SOCIAL_LOGIN_REDIRECT_URI` is set, it will override the config value.
                redirectURI: process.env.SOCIAL_LOGIN_REDIRECT_URI || '/social-callback'
            },
            resetPassword: {
                // The callback URI, which can be an absolute URL (including third-party URIs) or a relative path set up by the developer.
                // If the env var `RESET_PASSWORD_CALLBACK_URI` is set, it will override the config value.
                callbackURI: process.env.RESET_PASSWORD_CALLBACK_URI || '/reset-password-callback',
                // The landing path for reset password
                landingPath: '/reset-password-landing'
            }
        },
        // The default site for your app. This value will be used when a siteRef could not be determined from the url
        defaultSite: 'RefArch',
        // Provide aliases for your sites. These will be used in place of your site id when generating paths throughout the application.
        // siteAliases: {
        //     RefArch: 'us'
        // },
        // The sites for your app, which is imported from sites.js
        sites,
        // Commerce api config
        commerceAPI: {
            proxyPath: '/mobify/proxy/api',
            parameters: {
                clientId: 'aa4738e9-ddfd-4044-aff4-a970d059154e',
                organizationId: 'f_ecom_zzkc_002',
                shortCode: 'kv7kzm78',
                siteId: 'RefArch'
            }
        },
        // Einstein api config
        einsteinAPI: {
            host: 'https://api.cquotient.com',
            einsteinId: '',
            siteId: '',
            // Flag Einstein activities as coming from a production environment.
            // By setting this to true, the Einstein activities generated by the environment will appear
            // in production environment reports
            isProduction: false
        }
    },
    // This list contains server-side only libraries that you don't want to be compiled by webpack
    externals: [],
    // Page not found url for your app
    pageNotFoundURL: '/page-not-found',
    // Enables or disables building the files necessary for server-side rendering.
    ssrEnabled: true,
    // This list determines which files are available exclusively to the server-side rendering system
    // and are not available through the /mobify/bundle/ path.
    ssrOnly: ['ssr.js', 'ssr.js.map', 'node_modules/**/*.*'],
    // This list determines which files are available to the server-side rendering system
    // and available through the /mobify/bundle/ path.
    ssrShared: [
        'static/ico/favicon.ico',
        'static/robots.txt',
        '**/*.js',
        '**/*.js.map',
        '**/*.json'
    ],
    // Additional parameters that configure Express app behavior.
    ssrParameters: {
        ssrFunctionNodeVersion: '22.x',
        proxyConfigs: [
            {
                host: 'kv7kzm78.api.commercecloud.salesforce.com',
                path: 'api'
            },
            {
                host: 'zzkc-002.dx.commercecloud.salesforce.com',
                path: 'ocapi'
            }
        ]
    }
}
