# ☕️ Coffee Cart Cypress E2E Tests

This project contains end-to-end tests for the [Coffee Cart Demo](https://coffee-cart.app) using [Cypress](https://www.cypress.io/). 
It automates scenarios such as adding coffee items to the cart, accepting a promotional offer for an extra cup, calculating totals, and submitting payment details.
---

## 📁 Project Structure

cypress/ ├── e2e/ │ └── coffeeCartTest.cy.js # Main test file ├── pageObjects/ │ ├── HomePage.js # Methods for interacting with the home page │ ├── CartPage.js # Methods for interacting with the cart └── support/ ├── commands.js # Custom commands (if any) └── helpers.js # Utility functions (e.g., calculate expected total)
---

## 🚀 Getting Started

### 1. Clone the Repository
git clone https://github.com/Toka-Mostafa/coffeeCart.git
cd coffeeCart

2. Install Dependencies
npm install

4. Open Cypress Test Runner
npx cypress open

To run tests headlessly:
npx cypress run


✅ Test Scenarios
✅ Add multiple coffee items to the cart
✅ Automatically accept promo offer for an extra cup
✅ Calculate and assert total price including promo
✅ Navigate to cart and verify checkout total
✅ Fill out and submit payment form with name and email

⚙️ Configuration
Base URL: https://coffee-cart.app

Cypress version: (update based on your package.json)

If needed, configure cypress.config.js with:
js
export default defineConfig({
  e2e: {
    baseUrl: 'https://coffee-cart.app',
  }
});
