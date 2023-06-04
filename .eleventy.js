const now = String(Date.now())
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig){

    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addShortcode('version', function () {
        return now
    })

    eleventyConfig.addCollection("page", function(collections) {
        return collections.getFilteredByTag("page").sort(function(a, b) {
            return a.data.order - b.data.order;
        });
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
            data: '_data',
            includes: '_components',
            layouts: '_layouts'
        }
    };
}