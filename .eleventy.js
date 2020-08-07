// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = config => {
    config.addPassthroughCopy('./src/static/');
    config.addPassthroughCopy("favicon.ico");
    config.addPassthroughCopy("admin");
    // Add filters
    config.addFilter('dateFilter', dateFilter);
    config.addFilter('w3DateFilter', w3DateFilter);
    // Returns a collection of blog posts in reverse date order
    config.addCollection('blog', collection => {
        return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    });
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
  };