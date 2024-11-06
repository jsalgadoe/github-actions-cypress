import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    excludeSpecPattern: [
      '**/1-getting-started/*.js',
      '**/2-advanced-examples/*.js',
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
