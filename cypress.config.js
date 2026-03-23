const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ou8qbk",
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://demoqa.com/text-box",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
