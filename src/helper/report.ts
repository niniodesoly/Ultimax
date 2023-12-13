const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  theme: 'bootstrap',
  reportPath: "./",
  reportName: "Playwright Automation Report",
  pageTitle: "Agregar Carrito Test Report",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "112",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Carrito de Compras eBook" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
    ],
  },
});
