# Flutter Counter — Cypress E2E Tests

This project contains end-to-end tests for the Flutter Counter (CanvasKit) Demo embedded inside an Angular application: https://flutter-angular.web.app/

Because the Flutter UI is rendered inside a CanvasKit WebGL canvas, normal DOM assertions and clicks do not work.
These tests demonstrate how to:
Enable Flutter semantics mode for automation
Interact with canvas-rendered elements
Assert counter values using accessibility nodes
Perform multiple increments reliably
---

## 📁 Project Structure

cypress/
├── e2e/
│   └── counterTest.cy.js      
│
├── pageObjects/
│   └── CounterPage.js        
│
├── support/
│   ├── commands.js
│   └── helpers.js│   
│   └── e2e.js
---

## 🚀 Getting Started

### 1. Clone the Repository
git clone https://github.com/Toka-Mostafa/flutter-counter-tests.git
cd flutter-counter-tests

2. Install Dependencies
npm install

4. Open Cypress Test Runner
npx cypress open

To run tests headlessly:
npx cypress run


## ✅ Test Scenarios
✅ The suite includes:
Enable Flutter semantics mode
Assert the initial counter value (0)
Click the Increment button (+)
Validate the updated counter value (1, 2, 3, …)
Perform multiple increments in sequence
Smart Canvas clicking fallback in case semantics is disabled
Compare canvas snapshots to confirm that UI is updating

## ⚙️ Configuration
Base URL: https://flutter-angular.web.app/#/

Cypress version: (update based on your package.json)

If needed, configure cypress.config.js with:
js
export default defineConfig({
  e2e: {
    baseUrl: 'https://flutter-angular.web.app/',
  }
});


## 📊 Test Reporting (Allure)

Allure results are generated automatically after running Cypress:
npx cypress run

Generate and open the HTML report:
npm run allure:generate
npm run allure:open

Screenshots for failing tests are saved under:
cypress/screenshots/
