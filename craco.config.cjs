/** 
 * Scss files that should be globally available,
 * they will be auto imported to all scss files.
 */
const AUTO_IMPORT_SCSS_FILES = [
  'src/scss/mixins/index.scss',
]

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          ${AUTO_IMPORT_SCSS_FILES.map(path => `@import "${path}";`).join('')}
          // additional scss code can be added here
        `,
      },
    },
  },
};