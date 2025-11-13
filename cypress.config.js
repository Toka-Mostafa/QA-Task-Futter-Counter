const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://flutter-angular.web.app/',
    specPattern: 'cypress/e2e/**/*.cy.js',
    screenshotOnRunFailure: true,
    video: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      allure: true,
    },
  },
});
