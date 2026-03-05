const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ou8qbk",
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
