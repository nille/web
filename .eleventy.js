const now = String(Date.now())
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy(
        {'src/images': '/images'}
    );
    eleventyConfig.addPassthroughCopy(
        {'./node_modules/alpinejs/dist/cdn.js': './js/alpine.js'},
    );
    eleventyConfig.addPassthroughCopy(
        {'./node_modules/tw-elements/dist/js/tw-elements.umd.min.js': './js/tw-elements.umd.min.js'}
                );

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
            input: "src",
            output: "build",
            data: "_data",
            includes: "_includes",
            layouts: "_layouts"
        }
    };
}