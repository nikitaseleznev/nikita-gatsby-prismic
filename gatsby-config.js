const path = require('path')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

// SEO configuration
const siteTitle = 'Nikita Seleznev';
const siteUrl = 'https://nikita-seleznev.com';
const siteDescription = 'Nikita Seleznev - artist, works with installations, sculpture, objects.';
const siteKeywords = 'nikita, seleznev, artist, installation, sculpture, objects, никита, селезнев, скульптор, художник, скульптура, инсталляция';
const siteThemeColor = '#000000';

// Accounts & API keys
const twitter = '';
const fbAppId = '';

// Used internally
const utilsTitleShort = 'Nikita Seleznev';
const utilsIcon = 'static/images/icon.png';
const utilsBackgroundColor = '#000000';

module.exports = {
    siteMetadata: {
        // SEO
        siteTitle,
        siteUrl,
        siteDescription,
        siteKeywords,
        siteThemeColor,
        social: {
            twitter,
            fbAppId,
        },
        // Utils
        utilsTitleShort,
        utilsIcon: path.resolve(__dirname, utilsIcon),
        utilsBackgroundColor,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: 'nikita-seleznev',
                accessToken: process.env.PRISMIC_API_TOKEN,
                customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: siteTitle,
                short_name: utilsTitleShort,
                start_url: '/',
                theme_color: siteThemeColor,
                background_color: utilsBackgroundColor,
                display: 'minimal-ui',
                icon: utilsIcon, // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-netlify',
            options: {
                mergeSecurityHeaders: true,
                mergeLinkHeaders: true,
                mergeCachingHeaders: true,
            },
        },
    ],
};
