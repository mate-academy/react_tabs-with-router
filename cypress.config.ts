// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // Configuração para testes E2E (End-to-End)
  e2e: {
    // Procura por arquivos de teste E2E na pasta 'cypress/e2e'
    specPattern: 'cypress/e2e/**/*.spec.{js,ts,jsx,tsx}',
    baseUrl: 'http://localhost:3000',
  },
  // Configuração para testes de componentes
  component: {
    supportFile: 'cypress/support/component.ts',
    specPattern: 'src/**/*.spec.{js,ts,jsx,tsx}',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
  // Configurações globais
  video: true,
  viewportHeight: 1920,
  viewportWidth: 1080,
  screenshotOnRunFailure: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'raw_reports',
    overwrite: false,
    html: false,
    json: true,
  }
});
