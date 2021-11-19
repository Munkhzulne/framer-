/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
    path: `config/.env.${process.env.GATSBY_ENV}`,
});

module.exports = {
    /* Your site config here */
    plugins: [
        'gatsby-plugin-use-query-params',
        {
            resolve: `gatsby-plugin-styled-components`,
        },
    ],
};
